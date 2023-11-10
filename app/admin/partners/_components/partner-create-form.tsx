"use client";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ChooseOffice from "@/app/admin/_components/choose-office";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createNewPartner } from "@/shared/api/api.generated";
import { startTransition } from "react";

const partnerCreateFormSchema = z.object({
  location: z.object({
    location: z.string(),
    locationCoordinates: z.tuple([z.number(), z.number()]),
  }),
});

const PartnerCreateForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: async (values: z.infer<typeof partnerCreateFormSchema>) =>
      createNewPartner({
        address: values.location.location,
        locationCoordinates: values.location.locationCoordinates,
      }),
    onSuccess: () => {
      toast({ title: "Партнёр создан" });
      startTransition(() => {
        router.refresh();
      });
    },
  });

  const form = useForm<z.infer<typeof partnerCreateFormSchema>>({
    resolver: zodResolver(partnerCreateFormSchema),
  });

  function onSubmit(values: z.infer<typeof partnerCreateFormSchema>) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="location"
          render={() => {
            const setLocationValue = (value: {
              location: string;
              locationCoordinates: [number, number];
            }) => {
              form.setValue("location", value);
            };
            return (
              <FormItem>
                <FormLabel>Офис</FormLabel>
                <ChooseOffice setValue={setLocationValue} />
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Создать
        </Button>
      </form>
    </Form>
  );
};

export default PartnerCreateForm;

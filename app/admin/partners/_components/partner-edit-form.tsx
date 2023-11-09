"use client";
import {
  PartnerInfoReadDto,
  patchPartnerStatistics,
} from "@/shared/api/api.generated";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { startTransition } from "react";

export const partnerEditFormSchema = z.object({
  whenPointConnected: z.string(),
  areCardsAndMaterialsDelivered: z.string(),
  daysSinceLastCardIssue: z.number(),
  numberOfApprovedApplications: z.number(),
  numberOfGivenCards: z.number(),
});

const PartnerEditForm = ({ partner }: { partner: PartnerInfoReadDto }) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: async (values: z.infer<typeof partnerEditFormSchema>) =>
      patchPartnerStatistics({
        id: partner.id,
        ...values,
      }),
    onSuccess: () => {
      toast({ title: "Партнёр обновлён" });
      startTransition(() => {
        router.refresh();
      });
    },
  });

  const form = useForm<z.infer<typeof partnerEditFormSchema>>({
    resolver: zodResolver(partnerEditFormSchema),
    defaultValues: {
      whenPointConnected: partner.whenPointConnected,
      areCardsAndMaterialsDelivered: partner.areCardsAndMaterialsDelivered,
      daysSinceLastCardIssue: partner.daysSinceLastCardIssue,
      numberOfApprovedApplications: partner.numberOfApprovedApplications,
      numberOfGivenCards: partner.numberOfGivenCards,
    },
  });
  function onSubmit(values: z.infer<typeof partnerEditFormSchema>) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="whenPointConnected"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Когда подключена точка?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Давно">Давно</SelectItem>
                  <SelectItem value="Вчера">Вчера</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="areCardsAndMaterialsDelivered"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Когда подключена точка?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Да">Да</SelectItem>
                  <SelectItem value="Нет">Нет</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="daysSinceLastCardIssue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Кол-во дней после выдачи последней карты</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfApprovedApplications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Кол-во одобренных заявок</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfGivenCards"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Кол-во выданных карт</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Изменить
        </Button>
      </form>
    </Form>
  );
};

export default PartnerEditForm;

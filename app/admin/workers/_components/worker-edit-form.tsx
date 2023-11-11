"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ChooseOffice from "@/app/admin/_components/choose-office";
import {
  Grade,
  patchUser,
  UserShortWCaseRead,
} from "@/shared/api/api.generated";
import { workerFormSchema } from "@/app/admin/workers/_components/worker-form-schema";
import { useMutation } from "@tanstack/react-query";
import { startTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const WorkerEditForm = (worker: UserShortWCaseRead) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: async (values: z.infer<typeof workerFormSchema>) =>
      patchUser({
        userId: worker.id,
        email: values.email,
        grade: Number(values.grade) as Grade,
        lastname: values.lastname,
        location: values.location.location,
        locationCoordinates: values.location.locationCoordinates,
        name: values.name,
        password: values.password,
        role: 2,
        surname: values.surname,
      }),
    onSuccess: () => {
      toast({ title: "Пользователь обновлён" });
      startTransition(() => {
        router.refresh();
      });
    },
  });

  const form = useForm<z.infer<typeof workerFormSchema>>({
    resolver: zodResolver(workerFormSchema),
    defaultValues: {
      name: worker.name,
      surname: worker.surname,
      lastname: worker.lastname,
      grade:
        worker.grade === "Сениор" ? "0" : worker.grade === "Мидл" ? "1" : "0",
      email: worker.email,
      password: "",
      location: {
        location: "",
        locationCoordinates: [0, 0],
      },
    },
  });
  function onSubmit(values: z.infer<typeof workerFormSchema>) {
    mutate(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Фамилия</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Отчество</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Уровень</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="2">Джун</SelectItem>
                  <SelectItem value="1">Мидл</SelectItem>
                  <SelectItem value="0">Сениор</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <FormControl>
                  <ChooseOffice setValue={setLocationValue} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Изменить
        </Button>
      </form>
    </Form>
  );
};

export default WorkerEditForm;

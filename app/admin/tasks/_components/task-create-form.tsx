"use client";

import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { Grade, newConstantTask, Priority } from "@/shared/api/api.generated";
import { startTransition } from "react";

const grade = [
  {
    id: "0",
    label: "Сениор",
  },
  {
    id: "1",
    label: "Мидл",
  },
  {
    id: "2",
    label: "Джун",
  },
] as const;

const taskCreateFormSchema = z.object({
  name: z.string(),
  value: z.string(),
  grade: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Вы должны выбрать хотя бы одну должность.",
  }),
  priority: z.string(),
});

const TaskCreateForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (values: z.infer<typeof taskCreateFormSchema>) =>
      await newConstantTask({
        grades: values.grade.map((grade) => parseInt(grade, 10)) as Grade[],
        name: values.name,
        priority: Number(values.priority) as Priority,
        rules: [0],
        value: values.value,
        ruleQuantor: 0,
      }),
    onSuccess: () => {
      toast({ title: "Задача создана" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  const form = useForm<z.infer<typeof taskCreateFormSchema>>({
    resolver: zodResolver(taskCreateFormSchema),
    defaultValues: {
      name: "",
      value: "1",
      priority: "2",
      grade: [],
    },
  });

  function onSubmit(values: z.infer<typeof taskCreateFormSchema>) {
    mutate(values);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название задачи</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Время на выполнение в минутах</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Приоритет</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">Высокий</SelectItem>
                  <SelectItem value="1">Средний</SelectItem>
                  <SelectItem value="2">Низкий</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grade"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Требуемый уровень сотрудника</FormLabel>
              </div>
              {grade.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="grade"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
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

export default TaskCreateForm;

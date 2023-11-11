"use client";
import {
  ConstantTaskSizeRead,
  deleteConstantTask,
} from "@/shared/api/api.generated";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { startTransition } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const TaskDeleteButton = ({ task }: { task: ConstantTaskSizeRead }) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (id: number) => await deleteConstantTask({ id: id }),
    onSuccess: () => {
      toast({ title: "Партнёр удалён" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" className="p-0" variant="secondary">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие не может быть отменено. Это приведет к безвозвратному
            удалению задачи: {task.name}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              if (task.id > 3) mutate(task.id);
              else {
                toast({
                  variant: "destructive",
                  title:
                    "В данный момент невозможно удаление задач по умолчанию",
                });
              }
            }}
          >
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TaskDeleteButton;

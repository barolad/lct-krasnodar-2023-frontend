"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { deleteWorker } from "@/shared/api/api.generated";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const DeleteWorkerButton = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (id: string) => await deleteWorker({ userId: id }),
    onSuccess: () => {
      toast({ title: "Пользователь удалён" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <Button size="icon" variant="destructive" onClick={() => mutate(id)}>
      <Trash2 />
    </Button>
  );
};

export default DeleteWorkerButton;

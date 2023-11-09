"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { patchWorkerCase } from "@/shared/api/api.generated";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const WorkerToVacationButton = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (id: string) =>
      await patchWorkerCase({ id: id, case: "Отпуск" }),
    onSuccess: () => {
      toast({ title: "Пользователь отправлен в отпуск" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <Button variant="secondary" onClick={() => mutate(id)}>
      Отпуск
    </Button>
  );
};

export default WorkerToVacationButton;

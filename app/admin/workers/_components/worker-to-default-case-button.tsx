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
      await patchWorkerCase({ id: id, case: "Доступен" }),
    onSuccess: () => {
      toast({ title: "Пользователь снова доступен к работе" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <Button onClick={() => mutate(id)} variant="ghost">
      Вернуть
    </Button>
  );
};

export default WorkerToVacationButton;

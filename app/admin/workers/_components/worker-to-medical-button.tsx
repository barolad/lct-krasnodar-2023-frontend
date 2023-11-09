"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { patchWorkerCase } from "@/shared/api/api.generated";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useToast } from "@/components/ui/use-toast";

const WorkerToMedicalButton = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (id: string) =>
      await patchWorkerCase({ id: id, case: "Больничный" }),
    onSuccess: () => {
      toast({ title: "Пользователь отправлен в больничный" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <Button variant="secondary" onClick={() => mutate(id)}>
      Больничный
    </Button>
  );
};

export default WorkerToMedicalButton;

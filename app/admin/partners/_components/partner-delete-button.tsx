"use client";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { deletePartner } from "@/shared/api/api.generated";
import { startTransition } from "react";

const PartnerDeleteButton = ({ id }: { id: number }) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (id: number) => await deletePartner({ id: id }),
    onSuccess: () => {
      toast({ title: "Партнёр удалён" });
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

export default PartnerDeleteButton;

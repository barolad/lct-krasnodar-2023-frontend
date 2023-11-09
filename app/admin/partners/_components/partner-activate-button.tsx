"use client";
import { Button } from "@/components/ui/button";
import {
  PartnerInfoReadDto,
  reversePartnerStatus,
} from "@/shared/api/api.generated";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { startTransition } from "react";

const PartnerActivateButton = ({
  partner,
}: {
  partner: PartnerInfoReadDto;
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: async (id: number) => await reversePartnerStatus({ id: id }),
    onSuccess: () => {
      toast({ title: "Партнёр успешно изменил статус" });
      startTransition(() => {
        router.refresh();
      });
    },
  });
  return (
    <Button
      className="w-full"
      variant="secondary"
      onClick={() => mutate(partner.id)}
    >
      {partner.isActive ? "Деактивировать" : "Активировать"}
    </Button>
  );
};
export default PartnerActivateButton;

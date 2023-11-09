"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PartnerCreateForm from "@/app/admin/partners/_components/partner-create-form";

const WorkerCreateButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 md:mr-2" />{" "}
          <span className="hidden md:block">Добавить партнёра</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление партнёра</DialogTitle>
        </DialogHeader>
        <PartnerCreateForm />
        <DialogClose>
          <Button className="w-full" variant="secondary">
            Отмена
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default WorkerCreateButton;

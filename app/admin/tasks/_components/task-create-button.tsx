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
import TaskCreateForm from "@/app/admin/tasks/_components/task-create-form";

const WorkerCreateButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 md:mr-2" />{" "}
          <span className="hidden md:block">Добавить задачу</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление задачу</DialogTitle>
        </DialogHeader>
        <TaskCreateForm />
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

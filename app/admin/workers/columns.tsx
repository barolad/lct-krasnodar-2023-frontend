"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkerDialog from "@/app/admin/workers/_components/worker-dialog";
import { UserShortWCaseRead } from "@/shared/api/api.generated";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<UserShortWCaseRead>[] = [
  {
    accessorKey: "case",
    header: "Статус",
    cell: ({ row }) => <Badge variant="outline">{row.getValue("case")}</Badge>,
  },
  {
    accessorKey: "surname",
    header: "Фамилия",
  },
  {
    accessorKey: "name",
    header: "Имя",
  },
  { accessorKey: "lastname", header: "Отчество" },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4 h-8"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Офис
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "grade",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="-ml-4 h-8"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Уровень
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const worker = row.original;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <WorkerDialog {...worker} />
          </DialogContent>
        </Dialog>
      );
    },
  },
];

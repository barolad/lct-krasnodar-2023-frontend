import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PencilLine, UserCircle2 } from "lucide-react";
import { LatLngExpression } from "leaflet";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import WorkerEditForm from "@/app/admin/workers/_components/worker-edit-form";
import { UserShortWCaseRead } from "@/shared/api/api.generated";
import DeleteWorkerButton from "@/app/admin/workers/_components/delete-worker-button";
import WorkerToVacationButton from "@/app/admin/workers/_components/worker-to-vacation-button";
import WorkerToMedicalButton from "@/app/admin/workers/_components/worker-to-medical-button";
import WorkerToDefaultCaseButton from "@/app/admin/workers/_components/worker-to-default-case-button";

const CustomRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex w-full flex-col">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p>{value}</p>
    </div>
  );
};

const WorkerDialog = (worker: UserShortWCaseRead) => {
  const [editing, setEditing] = useState<boolean>(false);
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/admin/workers/_components/worker-map"), {
        loading: () => <Skeleton className="h-40 w-full rounded-md" />,
        ssr: false,
      }),
    [],
  );
  return (
    <DialogHeader className="space-y-4">
      <DialogTitle>Карточка сотрудника</DialogTitle>
      {editing ? (
        <>
          <WorkerEditForm {...worker} />
          <Button variant="secondary" onClick={() => setEditing(false)}>
            Отмена
          </Button>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex h-full items-center justify-center rounded-md bg-secondary">
              <UserCircle2 className="h-10 w-10 opacity-50" />
            </div>
            <div className="col-span-2 space-y-2">
              <CustomRow title="Фамилия" value={worker.surname} />
              <CustomRow title="Имя" value={worker.name} />
              <CustomRow title="Отчество" value={worker.lastname} />
              <CustomRow title="Уровень" value={worker.grade || ""} />
            </div>
          </div>
          {(worker.case.toLowerCase() === "отпуск" ||
            worker.case.toLowerCase() === "больничный") && (
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-2 text-muted-foreground">
              {worker.case.toLowerCase() === "отпуск" && (
                <p>Сотрудник в отпуске</p>
              )}
              {worker.case.toLowerCase() === "больничный" && (
                <p>Сотрудник на больничном</p>
              )}
              <WorkerToDefaultCaseButton id={worker.id} />
            </div>
          )}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Офис</p>
            <Map coordinates={worker.locationCoordinates as LatLngExpression} />
          </div>
          {worker.case.toLowerCase() == "доступен" && (
            <div className="grid w-full grid-cols-2 gap-4">
              <WorkerToVacationButton id={worker.id} />
              <WorkerToMedicalButton id={worker.id} />
            </div>
          )}
          <DialogFooter>
            <Button className="w-full">Подготовить отчёт</Button>
            <div>
              <Button size="icon" variant="secondary">
                <PencilLine
                  className="opacity-70"
                  onClick={() => setEditing(true)}
                />
              </Button>
            </div>
            <DialogClose>
              <DeleteWorkerButton id={worker.id} />
            </DialogClose>
          </DialogFooter>
        </>
      )}
    </DialogHeader>
  );
};

export default WorkerDialog;

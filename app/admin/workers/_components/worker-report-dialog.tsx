"use client";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  postApiReportGetReport,
  UserShortWCaseRead,
} from "@/shared/api/api.generated";
import { useQuery } from "@tanstack/react-query";

export const CustomRow = ({
  title,
  value = " ",
}: {
  title: string;
  value?: string;
}) => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded-md bg-secondary p-4">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const WorkerReportDialog = ({ worker }: { worker: UserShortWCaseRead }) => {
  const workerReport = useQuery({
    queryFn: async () => await postApiReportGetReport({ workerId: worker.id }),
    queryKey: [`worker_report_${worker.id}`],
  });
  return (
    <DialogContent>
      <DialogHeader className="space-y-4">
        <DialogTitle>
          Отчёт {worker.surname} {worker.name} {worker.lastname}
        </DialogTitle>
      </DialogHeader>
      {workerReport.isError || !workerReport.data ? (
        "Ошибка"
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-2">
            <CustomRow
              title="Задач выполнено всего"
              value={workerReport.data?.completedTasks.toString()}
            />
            <CustomRow
              title="Выездов на точку для стимулирования выдач"
              value={workerReport.data?.completedTasksOfEachType[0].toString()}
            />
            <CustomRow
              title="Обучение агента"
              value={workerReport.data?.completedTasksOfEachType[1].toString()}
            />
            <CustomRow
              title="Доставка карт и материалов"
              value={workerReport.data?.completedTasksOfEachType[2].toString()}
            />
            <CustomRow
              title="Километров пройдено всего"
              value={workerReport.data?.kilometersPassed.toString()}
            />
            <CustomRow
              title="Время потрачено всего"
              value={workerReport.data?.timeSpentOnTasks.toString()}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <CustomRow
              title="Задач уровня Сениор"
              value={workerReport.data?.completedTasksOfEachGrade[0].toString()}
            />
            <CustomRow
              title="Задач уровня Мидл"
              value={workerReport.data?.completedTasksOfEachGrade[1].toString()}
            />
            <CustomRow
              title="Задач уровня Джун"
              value={workerReport.data?.completedTasksOfEachGrade[2].toString()}
            />
            <CustomRow
              title="Самая популярная задача"
              value={workerReport.data?.mostPopularTask}
            />
            <CustomRow
              title="Дни без отдыха"
              value={workerReport.data?.completedTasksOfEachGrade[0].toString()}
            />
          </div>
        </div>
      )}
    </DialogContent>
  );
};
export default WorkerReportDialog;

import {
  ConstantTaskSizeRead,
  getConstantTasks,
} from "@/shared/api/api.generated";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import TaskCreateButton from "@/app/admin/tasks/_components/task-create-button";
import TaskDeleteButton from "@/app/admin/tasks/_components/task-delete-button";

const TaskItem = ({ task }: { task: ConstantTaskSizeRead }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid gap-2">
        <div className="flex items-center space-x-2 font-semibold">
          <p>{task.name}</p>{" "}
          {[...Array(3 - task.priority)].map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-amber-400" />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{task.value} минут на выполнение</Badge>
          {task.grades.map((grade) => (
            <>
              {grade === 0 && <Badge variant="secondary">Сениор</Badge>}
              {grade === 1 && <Badge variant="secondary">Мидл</Badge>}
              {grade === 2 && <Badge variant="secondary">Джун</Badge>}
            </>
          ))}
        </div>
      </div>
      <div>
        <TaskDeleteButton task={task} />
      </div>
    </div>
  );
};

const TasksPage = async () => {
  const tasks = await getConstantTasks({ cache: "no-cache" });
  console.log(tasks);
  return (
    <DashboardShell>
      <DashboardHeader heading="Задачи">
        <TaskCreateButton />
      </DashboardHeader>
      {tasks.length && (
        <div className="mx-2 divide-y divide-border rounded-md border">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </DashboardShell>
  );
};

export default TasksPage;

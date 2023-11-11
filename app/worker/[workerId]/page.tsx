import { getTodayTasksForOneCourier } from "@/shared/api/api.generated";
import WorkerNavigator from "@/app/worker/[workerId]/_components/worker-navigator";

const WorkerPage = async ({ params }: { params: { workerId: string } }) => {
  const allTasks = await getTodayTasksForOneCourier({
    userId: params.workerId,
  });

  return (
    <div className="h-full w-full">
      <WorkerNavigator dayTasksList={allTasks.dayTasksList} />
    </div>
  );
};

export default WorkerPage;

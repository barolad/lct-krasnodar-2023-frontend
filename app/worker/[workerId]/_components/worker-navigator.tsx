"use client";
import { DayTasks } from "@/shared/api/api.generated";
import useStep from "@/hooks/use-step";
import WorkerDayWork from "@/app/worker/[workerId]/_components/worker-day-work";
import { Button } from "@/components/ui/button";

const WorkerNavigator = ({ dayTasksList }: { dayTasksList: DayTasks[] }) => {
  const { currentStep, nextStep, goToStep } = useStep({
    totalSteps: dayTasksList.length + 1,
  });
  return (
    <>
      {currentStep < dayTasksList.length ? (
        <>
          {dayTasksList[currentStep].tasks.map((dayTask) => (
            <WorkerDayWork
              dayTask={dayTask}
              key={dayTask.aproximateDayEndTime}
              currentDay={currentStep}
              nextDay={nextStep}
            />
          ))}
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col space-y-4">
            <p className="text-2xl font-semibold">Это все задачи для вас!</p>
            <Button onClick={() => goToStep(0)}>В начало</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkerNavigator;

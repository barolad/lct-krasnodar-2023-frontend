"use client";
import { DayTaskSolution } from "@/shared/api/api.generated";
import MapProvider from "@/app/worker/[workerId]/_components/map-provider";
import useStep from "@/hooks/use-step";
import { Play } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WorkerDayWork = ({
  dayTask,
  currentDay,
  nextDay,
}: {
  dayTask: DayTaskSolution;
  currentDay: number;
  nextDay: () => void;
}) => {
  const { currentStep, nextStep, previousStep } = useStep({
    totalSteps: dayTask.tasks.length,
  });
  return (
    <div className="h-full w-full">
      <MapProvider task={dayTask.tasks[currentStep]} />
      <div className="fixed inset-x-0 bottom-0 z-50 mx-auto mt-24 h-fit w-full rounded-t-[10px] bg-background px-4 pb-4 pt-8 md:max-w-sm">
        <div className="absolute left-1/2 top-3 h-2 w-[100px] translate-x-[-50%] rounded-full bg-muted" />
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Прибытие в {dayTask.tasks[currentStep].approximateArrivingTime} (в
              пути {dayTask.tasks[currentStep].travelTime} мин)
            </p>
            <p className="font-semibold">
              {dayTask.tasks[currentStep].taskName} (
              {dayTask.tasks[currentStep].taskTime} мин) по адресу{" "}
              {dayTask.tasks[currentStep].addressTo}{" "}
            </p>
          </div>
          <div className="flex flex-nowrap space-x-2">
            <div className="flex w-full flex-col gap-2">
              <Link
                target="_blank"
                href={`https://yandex.ru/maps/?rtext=${dayTask.tasks[currentStep].locationCoordinatesFrom[0]},${dayTask.tasks[currentStep].locationCoordinatesFrom[1]}~${dayTask.tasks[currentStep].locationCoordinatesTo[0]},${dayTask.tasks[currentStep].locationCoordinatesTo[1]}&rtt=auto`}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "w-full",
                )}
              >
                Открыть в навигаторе
              </Link>
              <div className="flex flex-nowrap gap-2">
                {currentStep !== 0 && (
                  <div>
                    <Button variant="secondary" onClick={() => previousStep()}>
                      <Play className="rotate-180" />
                    </Button>
                  </div>
                )}
                {currentStep === dayTask.tasks.length - 1 ? (
                  <Button className="w-full" onClick={() => nextDay()}>
                    К следующему дню
                  </Button>
                ) : (
                  <Button className="w-full" onClick={() => nextStep()}>
                    Следующее
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDayWork;

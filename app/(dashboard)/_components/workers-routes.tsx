"use client";
import { DayTasks } from "@/shared/api/api.generated";
import { Polyline, Popup } from "react-leaflet";
import { customPolylineDecode } from "@/lib/polyline";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const colors = [
  "#ef4444",
  "#f97316",
  "#84cc16",
  "#06b6d4",
  "#a855f7",
  "#1c1917",
  "#fbbf24",
  "#78350f",
  "#064e3b",
  "#6366f1",
  "#1e3a8a",
  "#831843",
];

const WorkersRoutes = ({ todayTasks }: { todayTasks: DayTasks }) => {
  const [activeArray, setActiveArray] = useState<number[]>(
    Array(todayTasks.tasks.length).fill(1),
  );
  return (
    <>
      {todayTasks.tasks.map((tasksForWorker, indexTasksForWorker) => {
        const currentColor = colors[indexTasksForWorker % colors.length];
        return (
          <>
            {activeArray[indexTasksForWorker] === 1 && (
              <>
                {tasksForWorker.tasks.map((task) => (
                  <Polyline
                    key={
                      task.locationCoordinatesFrom[0] +
                      task.locationCoordinatesTo[1]
                    }
                    positions={customPolylineDecode(task.polyline.shape)}
                    pathOptions={{
                      color: currentColor,
                      weight: 4,
                    }}
                  >
                    <Popup>
                      <div className="space-y-2">
                        <div>
                          <Badge>
                            {tasksForWorker.worker.grade === 0 && "Сениор"}
                            {tasksForWorker.worker.grade === 1 && "Мидл"}
                            {tasksForWorker.worker.grade === 2 && "Джун"}
                          </Badge>
                        </div>
                        <p className="text-base font-medium">
                          {tasksForWorker.worker.name}{" "}
                          {tasksForWorker.worker.surname}{" "}
                          {tasksForWorker.worker.lastname}
                        </p>
                        <div className="flex flex-col space-y-0">
                          <span className="text-xs text-muted-foreground">
                            Отделение
                          </span>{" "}
                          {tasksForWorker.worker.location}
                        </div>
                        <div className="flex flex-col space-y-0">
                          <span className="text-xs text-muted-foreground">
                            Направляется
                          </span>{" "}
                          {task.taskName}, {task.addressTo}, до точки{" "}
                          {task.travelTime} минут
                        </div>
                        <Button
                          className="w-full"
                          variant="secondary"
                          onClick={() => {
                            const newArray = [...activeArray];
                            newArray[indexTasksForWorker] = 0;
                            setActiveArray(newArray);
                          }}
                        >
                          Скрыть
                        </Button>
                        <Button
                          className="w-full"
                          variant="secondary"
                          onClick={() => {
                            const newArray = Array(activeArray.length).fill(0);
                            newArray[indexTasksForWorker] = 1;
                            setActiveArray(newArray);
                          }}
                        >
                          Скрыть всё
                        </Button>
                      </div>
                    </Popup>
                  </Polyline>
                ))}
              </>
            )}
          </>
        );
      })}
      <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-2">
        {todayTasks.tasks.map((tasksForWorker, indexTasksForWorker) => (
          <>
            {activeArray[indexTasksForWorker] === 0 && (
              <>
                <Button
                  onClick={() => {
                    const newArray = [...activeArray];
                    newArray[indexTasksForWorker] = 1;
                    setActiveArray(newArray);
                  }}
                  variant="secondary"
                >
                  {tasksForWorker.worker.name}
                </Button>
              </>
            )}
          </>
        ))}
        {activeArray.includes(0) && (
          <Button
            onClick={() => {
              setActiveArray(Array(activeArray.length).fill(1));
            }}
            variant="secondary"
          >
            Показать все
          </Button>
        )}
      </div>
    </>
  );
};

export default WorkersRoutes;

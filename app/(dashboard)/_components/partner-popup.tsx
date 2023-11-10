"use client";
import { PartnerShortInfoWTask } from "@/shared/api/api.generated";
import { cn } from "@/lib/utils";
import { Popup } from "react-leaflet";

const PartnerPopup = ({ partner }: { partner: PartnerShortInfoWTask }) => {
  return (
    <Popup>
      <p className="font-semibold">{partner.address}</p>
      <div className="mb-4 space-y-2">
        {partner.tasks.length ? (
          partner.tasks.map((task) => (
            <div
              className="flex items-center justify-start space-x-2 rounded-md bg-secondary px-2 text-secondary-foreground"
              key={task.id}
            >
              <div
                className={cn(
                  "h-3 w-3 rounded-full bg-red-700",
                  task.priority === 1 && "bg-yellow-700",
                  task.priority === 2 && "bg-green-700",
                )}
              />
              <p>{task.name}</p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-start space-x-2 rounded-md bg-secondary px-2 py-4 text-secondary-foreground">
            Задач нет
          </div>
        )}
      </div>
    </Popup>
  );
};

export default PartnerPopup;

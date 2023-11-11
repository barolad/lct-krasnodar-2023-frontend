"use client";
import dynamic from "next/dynamic";
import { AssignedTaskShort } from "@/shared/api/api.generated";

const MapProvider = ({ task }: { task: AssignedTaskShort }) => {
  const Map = dynamic(
    () => import("@/app/worker/[workerId]/_components/worker-map"),
    {
      loading: () => (
        <div className="flex h-screen w-screen items-center justify-center">
          <iframe src="https://lottie.host/?file=741cc9ee-742f-4bac-940e-6661025300d3/l9xNcFDpm4.lottie"></iframe>
        </div>
      ),
      ssr: false,
    },
  );
  return <Map task={task} />;
};

export default MapProvider;

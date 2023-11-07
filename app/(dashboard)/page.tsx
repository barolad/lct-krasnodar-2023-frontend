import { useMemo } from "react";
import dynamic from "next/dynamic";
import ScaleController from "@/app/(dashboard)/_components/scale-controller";

const HomePage = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/(dashboard)/_components/general-map"), {
        loading: () => (
          <div className="flex h-screen w-screen items-center justify-center">
            <iframe src="https://lottie.host/?file=741cc9ee-742f-4bac-940e-6661025300d3/l9xNcFDpm4.lottie"></iframe>
          </div>
        ),
        ssr: false,
      }),
    [],
  );
  return (
    <div className="h-screen w-full">
      <Map />
    </div>
  );
};

export default HomePage;

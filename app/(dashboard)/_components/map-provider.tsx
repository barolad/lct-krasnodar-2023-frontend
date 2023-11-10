"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { Office, PartnerShortInfoWTask } from "@/shared/api/api.generated";

const MapProvider = ({
  partners,
  offices,
}: {
  partners: PartnerShortInfoWTask[];
  offices: Office[];
}) => {
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
  return <Map partners={partners} offices={offices} />;
};

export default MapProvider;

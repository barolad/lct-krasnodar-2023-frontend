import { useMemo } from "react";
import dynamic from "next/dynamic";
import { getOfficeGet, getTasksForPartners } from "@/shared/api/api.generated";
import MapProvider from "@/app/(dashboard)/_components/map-provider";

const HomePage = async () => {
  const partners = await getTasksForPartners({ cache: "no-cache" });
  const offices = await getOfficeGet({ cache: "no-cache" });
  return (
    <div className="h-screen w-full">
      <MapProvider partners={partners} offices={offices} />
    </div>
  );
};

export default HomePage;

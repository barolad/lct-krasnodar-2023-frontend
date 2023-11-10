import { getAllPartners } from "@/shared/api/api.generated";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import PartnerCreateButton from "@/app/admin/partners/_components/partner-create-button";
import PartnersList from "@/app/admin/partners/_components/partners-list";

const PartnersPage = async () => {
  const partners = await getAllPartners({ cache: "no-cache" });
  console.log("***");
  console.log(partners);

  const Map = dynamic(
    () => import("@/app/admin/partners/_components/map-with-partners"),
    {
      loading: () => <Skeleton className="h-40 w-full rounded-md" />,
      ssr: false,
    },
  );
  return (
    <DashboardShell>
      <DashboardHeader heading="Партнёры">
        <PartnerCreateButton />
      </DashboardHeader>
      <div className="mx-2 mb-10 grid grid-cols-1 gap-8 lg:mb-0 lg:h-[600px] lg:grid-cols-2">
        <div>{partners.length && <PartnersList partners={partners} />}</div>
        <div className="h-[600px]">
          <Map partners={partners} />
        </div>
      </div>
    </DashboardShell>
  );
};

export default PartnersPage;

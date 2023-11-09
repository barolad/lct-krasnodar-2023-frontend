import { getAllPartners } from "@/shared/api/api.generated";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import PartnerCreateButton from "@/app/admin/partners/_components/partner-create-button";
import PartnersList from "@/app/admin/partners/_components/partners-list";

const PartnersPage = async () => {
  const partners = await getAllPartners();
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
      <div className="grid h-[600px] grid-cols-2 gap-8">
        <div>{partners.length && <PartnersList partners={partners} />}</div>
        <div>
          <Map partners={partners} />
        </div>
      </div>
    </DashboardShell>
  );
};

export default PartnersPage;

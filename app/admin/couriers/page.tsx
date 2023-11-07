import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { Button } from "@/components/ui/button";
import { CouriersConfig } from "@/configs/couriers.config";
import DashboardItem from "@/app/admin/_components/dashboard-item";

const CouriersPage = () => {
  return (
    <DashboardShell>
      <DashboardHeader heading="Агенты">
        <Button>Добавить агента</Button>
      </DashboardHeader>
      <div>
        <div className="divide-y divide-border rounded-md border">
          {CouriersConfig.map((courier) => (
            <DashboardItem {...courier} key={courier.name} />
          ))}
        </div>
      </div>
    </DashboardShell>
  );
};

export default CouriersPage;

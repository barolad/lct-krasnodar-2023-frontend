import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { DataTable } from "@/app/admin/workers/data-table";
import { columns } from "@/app/admin/workers/columns";
import { getWorkersWithCases } from "@/shared/api/api.generated";
import WorkerCreateButton from "@/app/admin/workers/_components/worker-create-button";

const CouriersPage = async () => {
  const data = await getWorkersWithCases({ cache: "no-cache" });
  console.log(data);
  return (
    <DashboardShell>
      <DashboardHeader heading="Сотрудники">
        <WorkerCreateButton />
      </DashboardHeader>
      <div className="px-2">
        {/*<div className="divide-y divide-border rounded-md border">*/}
        {/*  {CouriersConfig.map((courier) => (*/}
        {/*    <DashboardItem {...courier} key={courier.name} />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <DataTable columns={columns} data={data} />
      </div>
    </DashboardShell>
  );
};

export default CouriersPage;

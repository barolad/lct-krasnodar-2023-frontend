import { DashboardShell } from "@/app/admin/_components/dashboard-shell";
import { DashboardHeader } from "@/app/admin/_components/dashboard-header";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/admin/workers/data-table";
import { columns } from "@/app/admin/workers/columns";
import { Plus } from "lucide-react";

const CouriersPage = async () => {
  const data = await fetch("http://87.242.88.146:8080/Api/User/GetShortAdmin", {
    cache: "no-cache",
  }).then((response) => response.json());
  console.log(data);
  return (
    <DashboardShell>
      <DashboardHeader heading="Сотрудники">
        <Button>
          <Plus className="h-4 w-4 md:mr-2" />{" "}
          <span className="hidden md:block">Добавить сотрудника</span>
        </Button>
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

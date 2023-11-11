import {
  getApiAuthMe,
  getApiOfficeGet,
  getTasksForPartners,
  getTodayTasksForAllCouriers,
} from "@/shared/api/api.generated";
import MapProvider from "@/app/(dashboard)/_components/map-provider";
import { notFound, redirect } from "next/navigation";

const HomePage = async () => {
  const user = await getApiAuthMe({ cache: "no-cache" });
  if (!user) redirect("/auth");
  if (user.role === "Менеджер") {
    const partners = await getTasksForPartners({ cache: "no-cache" });
    const offices = await getApiOfficeGet({ cache: "no-cache" });
    const allTasks = await getTodayTasksForAllCouriers({ cache: "no-cache" });
    return (
      <div className="h-screen w-full">
        <MapProvider
          partners={partners}
          offices={offices}
          allTasks={allTasks}
          user={user}
        />
      </div>
    );
  } else if (user.role === "Сотрудник") {
    redirect(`worker/${user.id}`);
  } else {
    redirect("/auth");
  }
};

export default HomePage;

import DashboardNav from "@/app/admin/_components/dashboard-nav";
import { AsideConfig } from "@/configs/aside.config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApiAuthMe } from "@/shared/api/api.generated";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getApiAuthMe();
  console.log(user);
  if (!user) return notFound();
  if (user.role != "Менеджер") return notFound();
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background ">
        <div className="container">
          <Link href="/">
            <Image
              src="/sovkombank-logo-full-fit.svg"
              alt="sovkombank-logo"
              width={200}
              height={50}
              draggable={false}
            />
          </Link>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={AsideConfig} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

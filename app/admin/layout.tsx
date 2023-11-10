import DashboardNav from "@/app/admin/_components/dashboard-nav";
import { AsideConfig } from "@/configs/aside.config";
import Image from "next/image";
import Link from "next/link";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
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

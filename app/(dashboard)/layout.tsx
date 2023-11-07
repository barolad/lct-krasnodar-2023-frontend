import AsideNav from "@/app/(dashboard)/_components/aside-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <AsideNav />
      {children}
    </div>
  );
};

export default DashboardLayout;

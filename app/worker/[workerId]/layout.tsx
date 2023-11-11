import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkerUserPopover from "@/app/worker/[workerId]/_components/worker-user-popover";
import { getApiAuthMe } from "@/shared/api/api.generated";

const WorkerLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getApiAuthMe({ cache: "no-cache" });
  return (
    <div className="flex h-screen w-full flex-col md:mx-auto md:max-w-sm">
      <header className="top-0 z-40 flex items-center justify-between rounded-b-md border-b bg-background px-4">
        <Link href="/">
          <Image
            src="/sovkombank-logo-full-fit.svg"
            alt="sovkombank-logo"
            width={200}
            height={50}
            draggable={false}
            className="mx-auto"
          />
        </Link>
        <WorkerUserPopover user={user} />
      </header>
      {children}
    </div>
  );
};

export default WorkerLayout;

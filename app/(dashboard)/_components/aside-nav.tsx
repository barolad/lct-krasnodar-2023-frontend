"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { FileCog, Play, UserCircle2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ScaleController from "@/app/(dashboard)/_components/scale-controller";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { UserRead } from "@/shared/api/api.generated";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const AsideNav = ({
  nextStep,
  previousStep,
  currentStep,
  user,
}: {
  nextStep: () => void;
  previousStep: () => void;
  currentStep: number;
  user: UserRead;
}) => {
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  return (
    <div className="fixed inset-y-0 left-0 z-40 h-screen w-20 brightness-100">
      <div className="flex h-full flex-col items-center justify-between p-4">
        <div>
          <Image
            src="/sovkombank-logo.svg"
            alt="logo"
            width={40}
            height={40}
            draggable={false}
          />
        </div>
        <div className="space-y-4">
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12"
            onClick={() => nextStep()}
          >
            <Play />
          </Button>
          <div
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "h-12 w-12 font-semibold",
            )}
          >
            {currentStep + 1}
          </div>
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12"
            onClick={() => previousStep()}
          >
            <Play className="rotate-180" />
          </Button>
          <ScaleController />
          <Link
            href="/admin"
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "h-12 w-12",
            )}
          >
            <FileCog className="text-neutral-900" />
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="secondary" className="h-12 w-12">
                <UserCircle2 />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="m-4 w-80 space-y-4 bg-secondary"
              side="right"
            >
              <div>
                <p className="font-medium">
                  {user.surname} {user.name} {user.lastname}
                </p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>

              <Button
                className="w-full"
                onClick={() => {
                  cookies.remove("jwt");
                  cookies.remove("jwt");
                  router.push("/auth");
                  router.refresh();
                }}
              >
                Выйти
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AsideNav;

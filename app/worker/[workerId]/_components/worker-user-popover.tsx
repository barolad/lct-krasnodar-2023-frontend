"use client";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import { UserRead } from "@/shared/api/api.generated";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { Drawer } from "vaul";
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const WorkerUserPopover = ({ user }: { user: UserRead }) => {
  const cookies = new Cookies(null, { path: "/" });
  const router = useRouter();
  return (
    <Drawer.Root>
      <DrawerTrigger asChild>
        <UserCircle2 />
      </DrawerTrigger>
      <DrawerContent className="h-fit space-y-4">
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
      </DrawerContent>
    </Drawer.Root>
  );
};

export default WorkerUserPopover;

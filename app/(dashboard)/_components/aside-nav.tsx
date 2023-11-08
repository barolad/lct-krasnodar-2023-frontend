import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AsideNav = () => {
  return (
    <div className="fixed inset-y-0 left-0 z-40 h-screen w-20 ">
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
              <div className="">
                <p className="font-medium">Иван Иванов</p>
                <p className="text-sm text-muted-foreground">
                  Региональный менеджер
                </p>
              </div>
              <Button className="w-full">Выйти</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AsideNav;

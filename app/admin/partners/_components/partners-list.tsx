"use client";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { PartnerInfoReadDto } from "@/shared/api/api.generated";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PartnerDialog from "@/app/admin/partners/_components/partner-dialog";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersList = ({ partners }: { partners: PartnerInfoReadDto[] }) => {
  return (
    <Command className="min-h-full rounded-md border">
      <CommandInput placeholder="Поиск партнёров..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandList className="min-h-full">
        {partners.map((partner) => (
          <CommandItem
            key={partner.id}
            className="flex justify-between px-4 py-2"
          >
            <div className="flex flex-col items-start space-y-2">
              <div>{partner.address}</div>
              <div className="flex flex-wrap gap-2">
                {!partner.isActive && (
                  <Badge variant="destructive">Точка не активна</Badge>
                )}
                <Badge variant="secondary">
                  Точка подключена {partner.whenPointConnected.toLowerCase()}
                </Badge>
                <Badge variant="secondary">
                  {partner.areCardsAndMaterialsDelivered.toLowerCase() === "да"
                    ? "Карты доставлены"
                    : "Карты не доставлены"}
                </Badge>
                {partner.daysSinceLastCardIssue !== 0 && (
                  <Badge variant="secondary">
                    Дней после последней выдачи:{" "}
                    {partner.daysSinceLastCardIssue.toString()}
                  </Badge>
                )}
                {partner.numberOfApprovedApplications !== 0 && (
                  <Badge variant="secondary">
                    {partner.numberOfApprovedApplications.toString()} одобренных
                    заявок
                  </Badge>
                )}
                {partner.numberOfGivenCards !== 0 && (
                  <Badge variant="secondary">
                    {partner.numberOfGivenCards.toString()} выданных карт
                  </Badge>
                )}
              </div>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <PartnerDialog partner={partner} />
                </DialogContent>
              </Dialog>
            </div>
          </CommandItem>
        ))}
        <CommandItem className="h-20" />
      </CommandList>
    </Command>
  );
};

export default PartnersList;

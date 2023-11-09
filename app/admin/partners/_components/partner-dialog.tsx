"use client";
import { PartnerInfoReadDto } from "@/shared/api/api.generated";
import {
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PencilLine } from "lucide-react";

import { LatLngExpression } from "leaflet";

import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import PartnerActivateButton from "@/app/admin/partners/_components/partner-activate-button";
import PartnerDeleteButton from "@/app/admin/partners/_components/partner-delete-button";
import PartnerEditForm from "@/app/admin/partners/_components/partner-edit-form";

const CustomRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex w-full flex-col">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p>{value}</p>
    </div>
  );
};

const PartnerDialog = ({ partner }: { partner: PartnerInfoReadDto }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/admin/workers/_components/worker-map"), {
        loading: () => <Skeleton className="h-40 w-full rounded-md" />,
        ssr: false,
      }),
    [],
  );
  return (
    <>
      <DialogHeader>
        <DialogTitle>{partner.address}</DialogTitle>
      </DialogHeader>
      {editing ? (
        <>
          <PartnerEditForm partner={partner} />
          <Button variant="secondary" onClick={() => setEditing(false)}>
            Отмена
          </Button>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <CustomRow
              title="Когда подключена точка"
              value={partner.whenPointConnected}
            />
            <CustomRow
              title="Карты и материалы доставлены"
              value={partner.areCardsAndMaterialsDelivered}
            />
            <CustomRow
              title="Кол-во дней после выдачи последней карты"
              value={partner.daysSinceLastCardIssue.toString()}
            />
            <CustomRow
              title="Кол-во одобренных заявок
"
              value={partner.numberOfApprovedApplications.toString()}
            />
            <CustomRow
              title="Кол-во выданных карт"
              value={partner.numberOfGivenCards.toString()}
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Офис</p>
            <Map
              coordinates={partner.locationCoordinates as LatLngExpression}
            />
          </div>
          <DialogFooter>
            <PartnerActivateButton partner={partner} />
            <div>
              <Button size="icon" variant="secondary">
                <PencilLine
                  className="opacity-70"
                  onClick={() => setEditing(true)}
                />
              </Button>
            </div>
            <DialogClose>
              <PartnerDeleteButton id={partner.id} />{" "}
            </DialogClose>
          </DialogFooter>
        </>
      )}
    </>
  );
};

export default PartnerDialog;

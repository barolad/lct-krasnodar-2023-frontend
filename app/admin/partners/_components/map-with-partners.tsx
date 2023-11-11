"use client";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import { CRS, LatLngExpression } from "leaflet";
import { FinishMarker, StartMarker } from "@/components/markers";
import { PartnerInfoReadDto } from "@/shared/api/api.generated";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PartnerDialog from "@/app/admin/partners/_components/partner-dialog";
import YandexTileLayer from "@/components/yandex-tile-layer";

const PopupContainer = ({ partner }: { partner: PartnerInfoReadDto }) => {
  return (
    <>
      <Popup className="space-y-2">
        <p>{partner.address}</p>{" "}
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="w-full">
                Подробнее
              </Button>
            </DialogTrigger>
            <DialogContent>
              <PartnerDialog partner={partner} />
            </DialogContent>
          </Dialog>
        </div>
      </Popup>
    </>
  );
};

const MapWithPartners = ({ partners }: { partners: PartnerInfoReadDto[] }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-md">
      <MapContainer
        zoom={10}
        center={partners[0].locationCoordinates as LatLngExpression}
        crs={CRS.EPSG3395}
      >
        <YandexTileLayer />
        {partners.map((partner) => (
          <>
            {partner.isActive ? (
              <StartMarker
                position={partner.locationCoordinates as LatLngExpression}
                key={partner.id}
              >
                <PopupContainer partner={partner} />
              </StartMarker>
            ) : (
              <FinishMarker
                position={partner.locationCoordinates as LatLngExpression}
                key={partner.id}
              >
                <PopupContainer partner={partner} />
              </FinishMarker>
            )}
          </>
        ))}
        {/**/}
      </MapContainer>{" "}
    </div>
  );
};

export default MapWithPartners;

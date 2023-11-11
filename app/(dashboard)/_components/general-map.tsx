"use client";

import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer, Popup } from "react-leaflet";
import { CRS, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import {
  NoActivePartnerMarker,
  OfficeMarker,
  PartnerMarker,
} from "@/components/markers";
import AsideNav from "@/app/(dashboard)/_components/aside-nav";
import {
  DaysSolution,
  Office,
  PartnerShortInfoWTask,
  UserRead,
} from "@/shared/api/api.generated";
import PartnerPopup from "@/app/(dashboard)/_components/partner-popup";
import YandexTileLayer from "@/components/yandex-tile-layer";
import WorkersRoutes from "@/app/(dashboard)/_components/workers-routes";
import useStep from "@/hooks/use-step";

const GeneralMap = ({
  partners,
  offices,
  allTasks,
  user,
}: {
  partners: PartnerShortInfoWTask[];
  offices: Office[];
  allTasks: DaysSolution;
  user: UserRead;
}) => {
  const bounds: LatLngBoundsExpression = [
    [45.11246, 39.07454],
    [44.9902, 38.91054],
  ];
  const { currentStep, nextStep, previousStep } = useStep({
    totalSteps: allTasks.dayTasksList.length,
  });
  const todayTasks = allTasks.dayTasksList[currentStep];
  return (
    <>
      <MapContainer
        bounds={
          (todayTasks.polylineExtremities as LatLngBoundsExpression) || bounds
        }
        zoomControl={false}
        crs={CRS.EPSG3395}
        fadeAnimation
      >
        <YandexTileLayer />
        {!!offices.length &&
          offices.map((office) => (
            <OfficeMarker
              position={office.locationCoordinates as LatLngExpression}
              key={office.id}
            >
              <Popup>
                <p className="font-semibold">{office.address}</p>
              </Popup>
            </OfficeMarker>
          ))}
        {partners.map((partner) => (
          <>
            {partner.isActive ? (
              <PartnerMarker
                key={partner.id}
                position={partner.locationCoordinates as LatLngExpression}
              >
                :
                <PartnerPopup partner={partner} />
              </PartnerMarker>
            ) : (
              <NoActivePartnerMarker
                key={partner.id}
                position={partner.locationCoordinates as LatLngExpression}
              />
            )}
          </>
        ))}
        <WorkersRoutes todayTasks={todayTasks} />
        <AsideNav
          nextStep={nextStep}
          previousStep={previousStep}
          currentStep={currentStep}
          user={user}
        />
      </MapContainer>
    </>
  );
};

export default GeneralMap;

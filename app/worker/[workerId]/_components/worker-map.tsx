"use client";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { CRS, LatLngBoundsExpression, LatLngExpression } from "leaflet";
import YandexTileLayer from "@/components/yandex-tile-layer";
import { MapContainer, Polyline } from "react-leaflet";
import { AssignedTaskShort } from "@/shared/api/api.generated";
import { customPolylineDecode } from "@/lib/polyline";
import {
  CurrentPosMarker,
  FinishMarker,
  StartMarker,
} from "@/components/markers";
import { useEffect, useState } from "react";
const bounds: LatLngBoundsExpression = [
  [45.11246, 39.07454],
  [44.9902, 38.91054],
];
const WorkerMap = ({ task }: { task: AssignedTaskShort }) => {
  const [currentLocation, setCurrentLocation] =
    useState<null | LatLngExpression>(null);
  const track = customPolylineDecode(task.polyline.shape);
  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation([latitude, longitude]);
      },
      (error) => {
        console.error(error + " ");
      },
    );
  }, []);
  return (
    <>
      <MapContainer
        bounds={
          (task.polyline.polylineExtremities as LatLngBoundsExpression) ||
          bounds
        }
        zoomControl={false}
        crs={CRS.EPSG3395}
        fadeAnimation
      >
        {currentLocation && <CurrentPosMarker position={currentLocation} />}
        <YandexTileLayer />
        <Polyline
          positions={track}
          pathOptions={{
            color: "#fff",
            weight: 6,
          }}
        />
        <Polyline
          positions={track}
          pathOptions={{
            color: "#ef4444",
            weight: 4,
          }}
        />

        <StartMarker position={track[0]} />
        <FinishMarker position={track[track.length - 1]} />
      </MapContainer>
    </>
  );
};

export default WorkerMap;

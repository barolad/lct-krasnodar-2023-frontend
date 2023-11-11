"use client";

import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer } from "react-leaflet";
import { CRS, LatLngExpression } from "leaflet";
import { StartMarker } from "@/components/markers";
import YandexTileLayer from "@/components/yandex-tile-layer";

const WorkerMap = ({ coordinates }: { coordinates: LatLngExpression }) => {
  return (
    <div className="h-40 w-full overflow-hidden rounded-md">
      <MapContainer center={coordinates} crs={CRS.EPSG3395} zoom={15}>
        <YandexTileLayer />
        <StartMarker position={coordinates} />
      </MapContainer>
    </div>
  );
};

export default WorkerMap;

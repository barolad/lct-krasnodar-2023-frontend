"use client";

import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { CRS, LatLngExpression } from "leaflet";
import { StartMarker } from "@/components/markers";

const WorkerMap = ({ coordinates }: { coordinates: LatLngExpression }) => {
  return (
    <div className="h-40 w-full overflow-hidden rounded-md">
      <MapContainer center={coordinates} crs={CRS.EPSG3395} zoom={15}>
        <TileLayer
          subdomains={["01", "02", "03", "04"]}
          url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
          attribution='©<a http="https://yandex.ru" target="_blank"> Yandex</a>'
          className="yandex-tile-layer brightness-90"
        />
        <StartMarker position={coordinates} />
      </MapContainer>
    </div>
  );
};

export default WorkerMap;

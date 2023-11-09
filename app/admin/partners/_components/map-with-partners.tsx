"use client";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { CRS, LatLngExpression } from "leaflet";
import { StartMarker } from "@/components/markers";
import { PartnerInfoReadDto } from "@/shared/api/api.generated";

const MapWithPartners = ({ partners }: { partners: PartnerInfoReadDto[] }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-md">
      <MapContainer
        zoom={10}
        center={partners[0].locationCoordinates as LatLngExpression}
        crs={CRS.EPSG3395}
      >
        <TileLayer
          subdomains={["01", "02", "03", "04"]}
          url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
          attribution='©<a http="https://yandex.ru" target="_blank"> Yandex</a>'
          className="yandex-tile-layer brightness-90"
        />
        {partners.map((partner) => (
          <StartMarker
            position={partner.locationCoordinates as LatLngExpression}
            key={partner.id}
          />
        ))}
        {/**/}
      </MapContainer>{" "}
    </div>
  );
};

export default MapWithPartners;

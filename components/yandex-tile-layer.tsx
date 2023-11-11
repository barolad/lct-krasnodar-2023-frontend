"use client";
import { TileLayer } from "react-leaflet";

const YandexTileLayer = () => {
  return (
    <TileLayer
      subdomains={["01", "02", "03", "04"]}
      url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
      attribution='©<a http="https://yandex.ru" target="_blank"> Yandex</a>'
      className="brightness-90"
    />
  );
};

export default YandexTileLayer;

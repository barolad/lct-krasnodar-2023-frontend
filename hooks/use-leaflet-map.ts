import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

const useLeafletMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const map = useMap();

  useEffect(() => {
    if (map) {
      mapRef.current = map;
    }
  }, [map]);

  return mapRef.current;
};

export default useLeafletMap;

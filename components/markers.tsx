import { divIcon } from "leaflet";
import { Marker, MarkerProps } from "react-leaflet";

export const StartMarker = (props: MarkerProps) => {
  return (
    <Marker
      icon={divIcon({
        className:
          "h-12 w-12 bg-green-500 rounded-full outline outline-1 outline-white",
      })}
      {...props}
    />
  );
};

export const FinishMarker = (props: MarkerProps) => {
  return (
    <Marker
      icon={divIcon({
        className:
          "h-12 w-12 bg-black rounded-full outline outline-1 outline-white",
      })}
      {...props}
    />
  );
};

export const IntermediatePointMarker = ({
  bgColor,
  props,
}: {
  bgColor: string;
  props: MarkerProps;
}) => {
  return (
    <Marker
      icon={divIcon({
        className: `h-54 w-54 rounded-full bg-[#FFF] outline outline-1 outline-white flex flex-col items-center justify-center`,
        iconSize: [50, 50],
        html: "<p class=''>1</p>",
      })}
      {...props}
    />
  );
};

export const IconMarker = (props: MarkerProps) => {
  return (
    <Marker
      icon={divIcon({
        className: "bg-blue-700 rounded-full",
        iconSize: [25, 25],
        html: '<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car-front"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"/><path d="M7 14h.01"/><path d="M17 14h.01"/><rect width="18" height="8" x="3" y="10" rx="2"/><path d="M5 18v2"/><path d="M19 18v2"/></svg></div>',
      })}
      {...props}
    />
  );
};

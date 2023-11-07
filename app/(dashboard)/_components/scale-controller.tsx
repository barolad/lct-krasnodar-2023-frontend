"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useMap } from "react-leaflet";

const ScaleController = () => {
  const map = useMap();

  const handleZoomIn = () => {
    map.zoomIn();
  };

  const handleZoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className="fixed bottom-20 left-4 z-40">
      <div className="flex flex-col space-y-4">
        <Button
          size="icon"
          variant="secondary"
          className="h-12 w-12"
          onClick={handleZoomIn}
        >
          <Plus />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-12 w-12"
          onClick={handleZoomOut}
        >
          <Minus />
        </Button>
      </div>
    </div>
  );
};

export default ScaleController;

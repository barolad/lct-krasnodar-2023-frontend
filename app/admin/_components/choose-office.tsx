"use client";

import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { LatLngExpression } from "leaflet";
import { FormControl } from "@/components/ui/form";
import { geocoder, GeocoderCustomResponse } from "@/shared/api/api.generated";

const ChooseOffice = ({
  setValue,
}: {
  setValue: (value: {
    location: string;
    locationCoordinates: [number, number];
  }) => void;
}) => {
  const Map = dynamic(
    () => import("@/app/admin/workers/_components/worker-map"),
    {
      loading: () => <Skeleton className="h-40 w-full rounded-md" />,
      ssr: false,
    },
  );

  const [addresses, setAddresses] = useState<null | GeocoderCustomResponse>(
    null,
  );

  useEffect(() => {
    setValue({
      location: addresses?.addressLine || " ",
      // @ts-ignore
      locationCoordinates: addresses?.poss || [0, 0],
    });
  }, [addresses]);

  const debounced = useDebouncedCallback(async (inputValue: string) => {
    if (inputValue.length) {
      const response = await geocoder({ address: inputValue });
      setAddresses(response);
    } else setAddresses(null);
  }, 1500);

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value);
  };

  return (
    <div className="space-y-2">
      <FormControl>
        <Input onChange={(event) => onChangeInputHandler(event)} />
      </FormControl>
      {addresses && <Map coordinates={addresses.poss as LatLngExpression} />}
      <p className="mt-2 text-sm text-muted-foreground">
        {addresses ? `Найдено: ${addresses.addressLine}` : "Не найдено"}
      </p>
    </div>
  );
};

export default ChooseOffice;

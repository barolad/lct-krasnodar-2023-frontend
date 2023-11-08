"use client";

import { FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { YandexGeocoderResponse } from "@/types";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import { LatLngExpression } from "leaflet";

const ChooseOffice = ({ field }: { field: FieldValues }) => {
  const Map = dynamic(
    () => import("@/app/admin/workers/_components/worker-map"),
    {
      loading: () => <Skeleton className="h-40 w-full rounded-md" />,
      ssr: false,
    },
  );

  const [addresses, setAddresses] = useState<null | YandexGeocoderResponse>(
    null,
  );

  const debounced = useDebouncedCallback(async (inputValue: string) => {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=228d6b68-f2a4-46da-a830-c4fc1b8ad721&geocode=${inputValue}&format=json`,
    );
    setAddresses((await response.json()) as YandexGeocoderResponse);
    field.onChange({
      location:
        addresses?.response.GeoObjectCollection.featureMember[0].GeoObject
          .metaDataProperty.GeocoderMetaData.AddressDetails.Country.AddressLine,
      locationCoordinates:
        addresses?.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(" ")
          .map((num) => parseFloat(num))
          .reverse(),
    });
  }, 1500);

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value);
  };

  return (
    <div className="space-y-2">
      <Input onChange={(event) => onChangeInputHandler(event)} />
      {addresses && (
        <Map
          coordinates={
            addresses.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
              .split(" ")
              .map((num) => parseFloat(num))
              .reverse() as LatLngExpression
          }
        />
      )}
      <p className="mt-2 text-sm text-muted-foreground">
        {addresses
          ? `Найдено: ${addresses.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AddressLine}`
          : "Не найдено"}
      </p>
    </div>
  );
};

export default ChooseOffice;

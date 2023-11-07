"use client";
import "leaflet/dist/leaflet.css";
import "@/styles/leaflet.css";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { CRS, LatLngBoundsExpression } from "leaflet";
import { IconMarker } from "@/app/(dashboard)/_components/markers";
import { DepotConfig } from "@/configs/depot.config";
import ScaleController from "@/app/(dashboard)/_components/scale-controller";
import { customPolylineDecode } from "@/lib/polyline";

const GeneralMap = () => {
  const bounds: LatLngBoundsExpression = [
    [45.11246, 39.07454],
    [44.9902, 38.91054],
  ];
  const track = customPolylineDecode(
    "wxz|tA}azgiA|NpC|E|@iSzeCY~CKlAQhBUjC_C~XoDdb@}Hp_AqHt{@qKrbAoDd`@uDpa@aDhX_BzK{C`R{@fFdGzAbAsFrC{YfA_NvLwsArJgbAnHu{@jIebAlBkUrDgc@TkCZyDX_D~Hq_AzIceA~Hm_AjG}t@r@mIr@aJnGmw@bGau@v@oJn@uHtGiv@nFun@|AiQ~Hw~@tI{bAjI{`AnIwaA~R}}B\\cE`@mElCe[lNe`BlKmmAdDuKvAeDbA_CfBkExA{@rAmAhA}A|@mBr@yBb@cCP_BF_B@iCKgC[cCg@}BgAuC}AeHiA_IM_ElAqNjJwhAjKcoAj@qHrByW~I}lAxGe}@zEko@|KmzAvBmYz@aLhAgObBcU`DsJlD}IzBsHfFsHzA_HR}EUaEw@wEaB_FoAkAiAkA_BiAxAyQhAkOvCw_@fGkw@|Gu|@TsC\\gErEsl@dKasANgBt@wJ~AqSz@yKb@uFhEdAdU`FfKdAln@`QnDhAdDx@jJ|BzQtEpdAnWf@mFVcCfAqKvGuo@wGto@gApKWbCg@lFpMbD|PjEdJ|BxR|E`^|I|R`FpFpAd^vIj@qGlNc`BjB}Tj@{GdDv@bk@jNVFlVfGnl@pNhEpAfD|@`Bb@pDbAjw@~RtYlIlCn@bBsQxAmPd@wF~BaXrGct@\\kEyCs@yn@aOeLgCkCk@k@MkTuE{@StQgwB|@oKRiCDm@Dg@\\iEfKsrAfEog@b@aFHaAb@mF~Dsd@lCwY|Ha{@TmCRiCdBkTvKwtAhB}T^sEVwCxL}rArDw`@`@}E`@sE|AwRtLewAvEqj@h@yF`@{EhJahAbIq~@\\kEFw@F{@ZkDt@}ItOyhB^kEf@_GhAsMnDab@lE}g@^oEj@qG`Hg_Ap@yHhIo`Az@yJl@gHf@_GfLerAnCm[zE{Wj@cDhDmR`@mCrB{OpbA_tLtCe[dGgu@rB}Ud@eEhAkL~B{XxBmZ|@i`@TgOT}O[au@}@mZ}@mX_@qK]wI}Ak`@_Bka@EyCMsHDcg@TiQh@ia@nDsj@vDw^bDyUfC}R~Fyf@bEy[rIcs@fA_JfF_[nFsU|K_\\lk@sbBpSgo@vIiWvOgd@hCyEjFqFxDqAvEg@jh@yCfQqArEg@n{@qHjm@wDny@kFtBRrBlAdGzG`AvA`Ap@hBb@xAJnBi@|AkAb@m@d@cBp@iI`@wFnF{e@`@uClE}d@bG_q@bD}_@|A}P`G}l@xDoZtA}ItH}e@rSseAnK{i@lDaQxd@aaCjHs^tGc\\tBoK`CoLtMcp@fGmZ`Num@`Mqm@vNmt@dEsT~AyIz@cFXuAtFyWvIub@ru@wyDtFqVzDkT~A{LtM_s@lC{N~FeWtAuBrCkDrB}@tDBzAZtAj@l[pNtQbHxF`CfI|Cfn@zU`FxBhaAn^dSjHty@~YzTzH`[xKpNxFhAv@n@~@d@tAl@|CvBzRVhAPn@pAbDpAdBv@j@rBfA~Ab@dB\\`Di@tBy@jAu@~@aArAgBjAwB|@aCZoBZqCFsB@cDaAiIPaFf@qFbAiEfSwm@|u@u}BhSyn@pC}JtGmUhGoZlMyv@lCmOp@uDlAmSd@mNBcQ_AeTkAmN_BgMoKgo@s@mEcQ}hAiCwOSsAo@eEew@uhFuGoc@~@iJxAqMrEuQlF}J|KeO`AcA`k@sk@nPsUdKmT|DwPjEq[|@iM\\uGF{IF}HYk\\EmEEqGi@}b@UqPEwDg@s\\CqBOmKc@ei@Yob@Fu[Pgi@|@exARyPn@gkB@{C`@u{@IcOcAg\\cDw^cHgp@kKq_AoSalB{@aIwDe^cBwOqHtBxAlMpOhvA~Gjn@dVxzBdBhRzB~Zn@ja@A~u@o@bxA[z]M~Z",
  );
  return (
    <>
      <MapContainer bounds={bounds} zoomControl={false} crs={CRS.EPSG3395}>
        <TileLayer
          subdomains={["01", "02", "03", "04"]}
          url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
          attribution='©<a http="https://yandex.ru" target="_blank"> Yandex</a>'
          className="yandex-tile-layer brightness-90"
        />
        {DepotConfig.map((depot) => (
          <IconMarker position={[depot.lat, depot.lon]} key={depot.title} />
        ))}
        <Polyline
          positions={track}
          pathOptions={{ color: "#f00", weight: 4 }}
        />
        <ScaleController />
      </MapContainer>
    </>
  );
};

export default GeneralMap;

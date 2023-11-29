import {
    GoogleMap,
    Marker,
    useJsApiLoader,
    MarkerClusterer,
    InfoWindow,
} from "@react-google-maps/api";
import Loading from "../utils/Loading";
import { useCallback, useMemo, useRef } from "react";
import "./map.css";

export interface IMapProps {}

const containerStyle = {
    width: '400px',
    height: '400px'
  };

export default function Map(props: IMapProps) {
  function getApiKey() {
    if (process.env.REACT_APP_GOOGLE_MAPS_API_KEY != undefined) {
      return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    } else {
      return "";
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // googleMapsApiKey: getApiKey(),
    googleMapsApiKey: "",
    version: "weekly",
    nonce: undefined,
    language: "PL",
    region: undefined,
    libraries: undefined,
    preventGoogleFontsLoading: undefined,
    mapIds: undefined,
    authReferrerPolicy: undefined,
  });

  const mapRef = useRef();

  const mapCenter = useMemo(
    () => ({ lat: 52.52245662560353, lng: 19.341419774433 }),
    []
  );

  const options = useMemo(
    () => ({
      mapId: "c3f5f9d1cc7c834c",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const zoom = 7;

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  return isLoaded ? (
    <GoogleMap
      zoom={zoom}
      center={mapCenter}
      options={options}
      onLoad={onLoad}
      mapContainerClassName="map-container"
    ></GoogleMap>
  ) : (
    <Loading />
  );
}

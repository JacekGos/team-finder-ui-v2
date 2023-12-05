import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  CircleF,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";
import Loading from "../utils/Loading";
import { useCallback, useMemo, useRef } from "react";
import { SportEvent } from "../events/model/eventModel";
import { icons } from "./icons";

export interface IMapProps {
  events: SportEvent[] | null;
  mapStyle: string;
}

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};

export default function Map(props: IMapProps) {
  console.log('map style: ', props.mapStyle);
  const mapRef = useRef<GoogleMap>();
  const mapCenter = useMemo<LatLngLiteral>(
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

  function getApiKey() {
    if (process.env.REACT_APP_GOOGLE_MAPS_API_KEY != undefined) {
      return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    } else {
      return "";
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: getApiKey(),
    version: "weekly",
    nonce: undefined,
    language: "PL",
    region: undefined,
    libraries: undefined,
    preventGoogleFontsLoading: undefined,
    mapIds: undefined,
    authReferrerPolicy: undefined,
  });

  function getIcon(discipline: string): string | undefined {
    let foundIcon;
    icons.find((icon: any) => {
      if (icon.type === discipline) {
        foundIcon = icon;
      }
    });
    if (foundIcon != undefined) return foundIcon["icon"];
    else return undefined;
  }

  const testEvents: LatLngLiteral[] = [
    { lat: 52.1976, lng: 20.8814 },
    { lat: 52.0976, lng: 20.8814 },
  ];

  const markersArray: Function = (clusterer: any): JSX.Element[] => {
    return props.events.map((event, index) => (
      <Marker
        key={index}
        position={event.location}
        clusterer={clusterer}
        onLoad={() => {console.log('marker loaded')}}
        icon={getIcon(event.activityType)}
      />
    ));
  };

  return isLoaded ? (
    <GoogleMap
      zoom={zoom}
      center={mapCenter}
      options={options}
      onLoad={onLoad}
      mapContainerClassName={props.mapStyle}
    >
      <MarkerClusterer>
        {(clusterer) => markersArray(clusterer)}
      </MarkerClusterer>
      <CircleF center={testEvents[0]} radius={100000} options={closeOptions} />
    </GoogleMap>
  ) : (
    <Loading />
  );
}

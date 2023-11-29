import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import "./map.css";
import Loading from "../utils/Loading";
import { useCallback, useMemo, useRef } from "react";
import { SportEvent } from "../events/model/eventModel";
import { icons } from "./icons";
import { Icon } from "./model/mapModel";

export interface IMapProps {
  events: SportEvent[];
}

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function Map(props: IMapProps) {
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

  function getIcon(discipline: string): string | undefined {
    let foundIcon;
    icons.find((icon: any) => {
      if (icon.type === discipline) {
        foundIcon = icon;
      }
    });
    if (foundIcon != undefined) return foundIcon["icon"];
    else return undefined;
    // return foundIcon?.icon;
  }

  const testEvents: LatLngLiteral[] = [
    {lat: 52.1976, lng: 20.8814 },
    {lat: 52.0976, lng: 20.8814 }
]

  return isLoaded ? (
    <GoogleMap
      zoom={zoom}
      center={mapCenter}
      options={options}
      onLoad={onLoad}
      mapContainerClassName="map-container"
    >
        <Marker position={{lat: 52.1976, lng: 20.8814}} icon={getIcon('football')}/>

      {/* <Marker key={0} position={props.events[0].location} /> */}
      {/* <MarkerClusterer
        gridSize={30}
        onClick={() => {
          console.log("marker clicked");
        }}
        averageCenter
        enableRetinaIcons
      > */}
      {/* {props.events.map((event: SportEvent, index) => (
          <Marker key={index} position={event.location} />
        ))} */}
      {/* </MarkerClusterer> */}
      {/* <MarkerClusterer gridSize={30}>
        {
          (clusterer) =>
            props.events.map((event, index) => (
              <Marker
                key={index}
                position={event.location}
                clusterer={clusterer}
                icon={getIcon(event.discipline)}
              />
            ))
        }
      </MarkerClusterer> */}
    </GoogleMap>
  ) : (
    <Loading />
  );
}

import { tmpEvents } from "./tmpData/events";
import { useCallback, useMemo, useRef } from "react";
import EventTab from "./EventTab";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";
import Loading from "../utils/Loading";

export interface IEventsProps {}

export default function Events(props: IEventsProps) {
  function getApiKey() {
    if (process.env.REACT_APP_GOOGLE_MAPS_API_KEY != undefined) {
      return process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    } else {
      return "";
    }
  }

  function getMap() {
    if (isLoaded) {
      //   return (
      //     <GoogleMap
      //       zoom={zoom}
      //       center={mapCenter}
      //       options={options}
      //       onLoad={onLoad}
      //       mapContainerClassName="map-container"
      //     />
      // );
      return <Loading />
    } else {
      return <div style={{ color: "white" }}>Ładowanie mapy...</div>;
    }
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: getApiKey(),
    version: "weekly",
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

  const eventsData = useMemo(
    () =>
      tmpEvents.map((data, key) => {
        return <EventTab key={key} index={key} event={data} />;
      }),
    []
  );

  return (
    <>
      <Container fluid className="p-0">
        <MediaQuery minWidth={992}>
          <EventsDesktopView eventsData={eventsData} googleMaps={getMap()} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <EventsMobileView eventsData={eventsData} googleMaps={getMap()} />
        </MediaQuery>
        {/* <FilterModal
        show={showModal}
        isFullscreen={isFullscreen}
        type={type}
        handleClose={setShowModal}
    /> */}
      </Container>
    </>
  );
}

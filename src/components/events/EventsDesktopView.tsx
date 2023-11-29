import { GoogleMap } from "@react-google-maps/api";
import * as React from "react";
import { ReactElement, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Map from "../map/Map";
import EventTab from "./EventTab";
import { SportEvent } from "./model/eventModel";

export interface IEventsDesktopViewProps {
  events: SportEvent[];
  // eventsData: React.ReactElement[];
  // googleMaps: React.ReactElement;
}

export default function EventsDesktopView(props: IEventsDesktopViewProps) {
  const eventsData = useMemo(
    () =>
      props.events.map((data, key) => {
        return <EventTab key={key} index={key} event={data} />;
      }),
    []
  );

  return (
    <>
      <Container
        fluid
        className="p-0 d-block"
        style={{ backgroundColor: "#1D2125" }}
      >
        <Row className="d-flex">
          <Col md={6} style={{ overflowY: "scroll", maxHeight: "80vh" }}>
            {eventsData}
          </Col>
          <Col md={6}>
            <Map events={props.events}/>
          </Col>
          {/* <Col>
            {!isLoaded ? (
              <div style={{ color: "white" }}>Ładowanie mapy...</div>
            ) : (
              <GoogleMap
                zoom={zoom}
                center={center}
                options={options}
                onLoad={onLoad}
                mapContainerClassName="map-container"
              >
                <MarkerClusterer gridSize={30}>
                  {(clusterer) =>
                    events.map((event, index) => (
                      <Marker
                        key={index}
                        position={event.location}
                        clusterer={clusterer}
                        icon={getIcon(event.discipline)}
                        onClick={() => showInfo(index)}
                      />
                    ))
                  }
                </MarkerClusterer>
              </GoogleMap>
            )}
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

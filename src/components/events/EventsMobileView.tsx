import * as React from "react";
import { ReactElement } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import MediaQuery from "react-responsive";

export interface IEventsMobileViewProps {
  eventsData: React.ReactElement[];
  googleMaps: React.ReactElement;
}

export default function EventsMobileView(props: IEventsMobileViewProps) {
  return (
    <>
      <Tabs style={{ marginTop: 150 }}>
        <Tab
          eventKey="events"
          title="Wydarzenia"
          style={{ overflowY: "scroll", maxHeight: "70vh" }}
        >
          {props.eventsData}
        </Tab>
        <Tab eventKey="map" title="Mapa">
          {props.googleMaps}
        </Tab>
      </Tabs>
      {/* <Tabs className="tabs " style={{ marginTop: 150 }}>
          <Tab
            eventKey="events"
            title="Wydarzenia"
            style={{ overflowY: "scroll", maxHeight: "70vh" }}
          >
            {props.eventsData}
          </Tab> */}
      {/* <Tab eventKey="map" title="Mapa">
            mapka */}
      {/* {!isLoaded ? (
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
                      />
                    ))
                  }
                </MarkerClusterer>
              </GoogleMap>
            )} */}
      {/* </Tab>
        </Tabs> */}
    </>
  );
}

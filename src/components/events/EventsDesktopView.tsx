import * as React from "react";
import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";

export interface IEventsDesktopViewProps {
  eventsData: React.ReactElement[];
}

export default function EventsDesktopView(props: IEventsDesktopViewProps) {
  return (
    <>
      <Container
        fluid
        className="p-0 d-block"
        style={{ backgroundColor: "#1D2125" }}
      >
        <Row className="d-flex">
          <Col md={6} style={{ overflowY: "scroll", maxHeight: "80vh" }}>
            {props.eventsData}
          </Col>
          <Col md={6}></Col>
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

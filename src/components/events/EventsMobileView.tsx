import * as React from "react";
import { ReactElement, useMemo } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Map from "../map/Map";
import { SportEvent } from "./model/eventModel";
import EventTab from "./EventTab";

export interface IEventsMobileViewProps {
  // eventsData: React.ReactElement[];
  events: SportEvent[];
}

export default function EventsMobileView(props: IEventsMobileViewProps) {
  const eventsData = useMemo(
    () =>
      props.events.map((data, key) => {
        return <EventTab key={key} index={key} event={data} />;
      }),
    []
  );
  return (
    <>
      <Container fluid className="p-0 d-block" style={{ marginTop: 0}}>
        <Tabs className="tabs">
          <Tab
            eventKey="events"
            title="Wydarzenia"
            style={{ overflowY: "scroll", maxHeight: "70vh" }}
          >
            {eventsData}
          </Tab>
          <Tab eventKey="map" title="Mapa">
            <Map events={props.events} mapStyle="map-container-mobile" zoom={6}/>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

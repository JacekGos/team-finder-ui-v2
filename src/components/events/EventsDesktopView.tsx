import { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Map from "../map/Map";
import EventTab from "./EventTab";
import { SportEvent } from "./model/eventModel";

export interface IEventsDesktopViewProps {
  events: SportEvent[];
}

export default function EventsDesktopView(props: IEventsDesktopViewProps) {
  console.log('EventsDesktopView events: ', props.events);
  const eventsData = useMemo(
    () =>
      props.events?.map((data, key) => {
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
            <Map events={props.events} mapStyle="map-container-desktop" zoom={7}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

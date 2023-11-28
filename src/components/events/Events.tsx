import { tmpEvents } from "./tmpData/events";
import { useMemo } from "react";
import EventTab from "./EventTab";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";

export interface IEventsProps {}

export default function Events(props: IEventsProps) {
  const eventsData = useMemo(
    () =>
      tmpEvents.map((data, key) => {
        return <EventTab key={key} index={key} event={data} />;
      }),
    []
  );

  return (
    <>
      <Container fluid className="p-0" >
        <MediaQuery minWidth={992}>
          <EventsDesktopView eventsData={eventsData} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <EventsMobileView eventsData={eventsData} />
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

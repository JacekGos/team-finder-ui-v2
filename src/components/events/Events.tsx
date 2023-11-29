import { tmpEvents } from "./tmpData/events";
import { useCallback, useMemo, useRef } from "react";
import "./events.css";
import EventTab from "./EventTab";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";

export interface IEventsProps {}

export default function Events(props: IEventsProps) {
//   const eventsData = useMemo(
//     () =>
//       tmpEvents.map((data, key) => {
//         return <EventTab key={key} index={key} event={data} />;
//       }),
//     []
//   );

  return (
    <>
      <Container fluid className="ps-2">
        <MediaQuery minWidth={992}>
          <EventsDesktopView events={tmpEvents} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <EventsMobileView events={tmpEvents} />
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

import { tmpEvents } from "./tmpData/events";
import "./events.css";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";

export interface IEventsProps {}

export default function Events(props: IEventsProps) {
  const { response, loading, error, sendData } = useAxios({
    method: "GET",
    url: `/posts/1`,
    headers: {
      accept: "*/*",
    },
  });

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

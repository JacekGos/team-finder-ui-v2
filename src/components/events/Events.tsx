import { tmpEvents } from "./tmpData/events";
import "./events.css";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import { SportEvent } from "./model/eventModel";
import { useEffect } from "react";
import Loading from "../utils/Loading";

export interface IEventsProps {}

export default function Events(props: IEventsProps) {

  const url =  process.env.REACT_APP_AXIOS_URL;
  console.log('url: ', url);

  const { response, loading, error, sendData } = useAxios({
    method: "GET",
    url: `v1/events`,
    headers: {
      accept: "*/*",
    },
  });

  useEffect(() => {
    sendData();
  }, []);

  console.log("loading: ", loading);
  console.log("isError: ", error !== undefined);
  console.log("error: ", error);

  return (
    <>
      <Container fluid className="ps-2">
        {/* <EventsDesktopView events={tmpEvents} /> */}
        {!loading && !error ? (
          <>
            <MediaQuery minWidth={992}>
              <EventsDesktopView events={response?.data} />
            </MediaQuery>
            <MediaQuery maxWidth={992}>
              <EventsMobileView events={response?.data} />
            </MediaQuery>
          </>
        ) : (
          <Loading />
        )}

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

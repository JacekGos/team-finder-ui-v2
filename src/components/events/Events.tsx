import { tmpEvents } from "./tmpData/events";
import "./events.css";
import MediaQuery from "react-responsive";
import EventsDesktopView from "./EventsDesktopView";
import EventsMobileView from "./EventsMobileView";
import { Container } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";
import { SportEvent } from "./model/eventModel";
import { useContext, useEffect, useState } from "react";
import Loading from "../utils/Loading";
import { FilterContext } from "../../context/filter-context/FilterContext";

export interface IEventsProps {}
export interface AxiosRequestParams {
  method: string;
  url: string;
}

const url = process.env.REACT_APP_AXIOS_URL;

export default function Events(props: IEventsProps) {
  const { location, activityType } = useContext(FilterContext);
  const [requestParams, setRequestParams] = useState<AxiosRequestParams>({
    method: "GET",
    url: "/v1/events",
  });

  const { response, loading, error, sendData } = useAxios({
    method: `${requestParams.method}`,
    url: `${requestParams.url}`,
    params: {
      activityType: activityType,
      location: location,
      range: 10000
    },
    headers: {
      accept: "*/*",
    },
  });


  useEffect(() => {
    sendData();
  }, []);

  useEffect(() => {
    setRequestParams({
      method: "GET",
      url: "/v1/events/filter",
    });

    console.log('filters changed in events')
    sendData();
  }, [location, activityType]);

  return (
    <>
      <Container fluid className="ps-2">
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

import "./events.css";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SportEvent } from "./model/eventModel";

export interface IEventTabProps {
  index: number;
  event: SportEvent;
}

export default function EventTab(props: IEventTabProps) {
  const iconSize = 45;
  const iconColor = "white";

  const icon = (discipline: string) => {
    switch (discipline) {
      case "FOOTBALL":
        return <BiFootball size={iconSize} style={{ color: `${iconColor}` }} />;
      case "VOLLEYBALL":
        return (
          <FaVolleyballBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "BASKETBALL":
        return (
          <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "TENNIS":
        return (
          <BiTennisBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "BICYCLE":
        return (
          <IoIosBicycle size={iconSize} style={{ color: `${iconColor}` }} />
        );
      default:
        return (
          <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
    }
  };

  return (
    <>
      <Container fluid className="mt-2 event-tab">
        <Row className="h-100 p-1">
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center "
            style={{
              backgroundColor: "#1D2125",
              borderRadius: 3,
              maxHeight: "100%",
            }}
          >
            {icon(props.event.activityType)}
          </Col>
          <Col xs={9} style={{ color: "white" }}>
            <Row className="h-50">
              <Col className="d-flex align-items-center justify-content-start event-tab-name">
                {props.event.name}
              </Col>
              <Col className="d-flex align-items-center justify-content-end event-tab-price">
                <Badge bg="secondary">{`${
                  props.event.price > 0 ? `${props.event.price} PLN` : "FREE"
                }`}</Badge>
              </Col>
            </Row>
            <Row className="h-50">
              <Col
                xl={4}
                xs={6}
                className="d-flex align-items-center justify-content-start event-tab-date"
              >
                {props.event.date.replace('T', ' ')}
              </Col>
              <Col
                xl={8}
                xs={6}
                className="d-flex align-items-center justify-content-end event-tab-address"
              >
                <span>
                  {props.event.city}
                </span>
                <span className="d-none d-xl-block">
                  {`, ${props.event.street}`}
                </span>
                <HiOutlineLocationMarker className="event-tab-loc-marker" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

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
  // handleClick
}

export default function EventTab(props: IEventTabProps) {
  const iconSize = 45;
  const iconColor = "white";

  const icon = (discipline: string) => {
    switch (discipline) {
      case "football":
        return <BiFootball size={iconSize} style={{ color: `${iconColor}` }} />;
      case "volleyball":
        return (
          <FaVolleyballBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "basketball":
        return (
          <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "tennis":
        return (
          <BiTennisBall size={iconSize} style={{ color: `${iconColor}` }} />
        );
      case "bicycle":
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
      <Container fluid className="mt-1 event-tab">
        <Row className="h-100 p-1">
          <Col
            xs={3}
            className="d-flex align-items-center justify-content-center "
            style={{ backgroundColor: "#1D2125", borderRadius: 3, maxHeight: '100%' }}
          >
            {icon(props.event.discipline)}
          </Col>
          <Col xs={9} style={{ color: "white" }}>
            <Row className="h-50">
              <Col
                className="d-flex align-items-center justify-content-start"
                style={{ fontSize: 15 }}
              >
                {props.event.name}
              </Col>
              <Col
                className="d-flex align-items-center justify-content-end"
                style={{ fontSize: 13 }}
              >
                <Badge bg="secondary">{props.event.price} PLN</Badge>
              </Col>
            </Row>
            <Row className="h-50">
              <Col
                className="d-flex align-items-center justify-content-start"
                style={{ fontSize: 15 }}
              >
                {props.event.date}
              </Col>
              <Col
                className="d-flex align-items-center justify-content-end"
                style={{ fontSize: 13 }}
              >
                {props.event.address}
                <HiOutlineLocationMarker
                  size={15}
                  style={{ color: "white", marginLeft: 3 }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

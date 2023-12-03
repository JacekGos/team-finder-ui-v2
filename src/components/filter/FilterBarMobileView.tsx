import { Button, Col, Row } from "react-bootstrap";
import "./filterbar.css";
import { SlMagnifier } from "react-icons/sl";
import { BsSliders2 } from "react-icons/bs";

export interface IFilterBarMobileViewProps {
  handleModal: (isFullscreen: boolean, type: string) => void;
}

export default function FilterBarMobileView(props: IFilterBarMobileViewProps) {
  return (
    <>
      <Row
        // className="position-fixed w-100"
        className="w-100"
        style={{
          height: 90,
          padding: "0 0 0 10px",
          backgroundColor: "#1D2125",
        }}
      >
        <Col className="d-flex align-items-center ps-0 overflow-scroll no-scrollbar">
          <button
            className="btn-rounded rounded-circle me-3"
            style={{ aspectRatio: "1/1" }}
            onClick={() => props.handleModal(true, "simple")}
          >
            <SlMagnifier size={25} />
          </button>
          <button
            className="btn-base text-nowrap d-flex align-items-center me-2"
            onClick={() => props.handleModal(true, "advanced")}
          >
            <BsSliders2 className="me-1 d-flex" />
            Więcej filtrów
          </button>
        </Col>
      </Row>
    </>
  );
}

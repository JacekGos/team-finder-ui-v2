import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./filterbar.css";
import MediaQuery from "react-responsive";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";
import { useState } from "react";
import FilterModal from "./modal/FilterModal";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export interface IFilterbarProps {}

export default function Filterbar(props: IFilterbarProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFullscreen, setFullscreen] = useState<boolean>(true);
  const [type, setType] = useState<string>("base");

  function handleModal(isFullscreen: boolean, type: string) {
    setFullscreen(isFullscreen);
    setShowModal(true);
    setType(type);
  }

  return (
    <>
      <Container fluid style={{ marginTop: 60, maxHeight: "100%" }}>
        <MediaQuery minWidth={992}>
          <DesktopView handleModal={handleModal} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <MobileView handleModal={handleModal} />
        </MediaQuery>
        <FilterModal
          show={showModal}
          isFullscreen={isFullscreen}
          type={type}
          handleClose={setShowModal}
        />
      </Container>
    </>
  );
}

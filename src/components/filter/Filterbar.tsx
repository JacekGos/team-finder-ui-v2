import "./filterbar.css";
import MediaQuery from "react-responsive";
import { useState } from "react";
import FilterModal from "./modal/FilterModal";
import FilterBarDesktopView from "./FilterBarDesktopView";
import FilterBarMobileView from "./FilterBarMobileView";
import { Container } from "react-bootstrap";

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
      <Container fluid>
        <MediaQuery minWidth={992}>
          <FilterBarDesktopView handleModal={handleModal} />
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <FilterBarMobileView handleModal={handleModal} />
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

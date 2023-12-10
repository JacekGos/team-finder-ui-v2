import * as React from "react";
import { Modal } from "react-bootstrap";
import SimpleModalContent from "./SimpleModalContent";
import AdvancedModalContent from "./AdvancedModalContent";

export interface IFilterModalProps {
  show: boolean;
  isFullscreen: boolean;
  type: string;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterModal(props: IFilterModalProps) {
  function getModalContent() {
    switch (props.type) {
      case "simple":
        return <SimpleModalContent handleClose={props.handleClose} />;
      case "advanced":
        return (
          <AdvancedModalContent
            isFullscreen={props.isFullscreen}
            handleClose={props.handleClose}
          />
        );
    }
  }

  return (
    <>
      <Modal
        show={props.show}
        fullscreen={props.isFullscreen ? true : "md-down"}
        style={{ zIndex: 1100 }}
      >
        {getModalContent()}
      </Modal>
    </>
  );
}

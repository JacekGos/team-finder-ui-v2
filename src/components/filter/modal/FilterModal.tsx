import * as React from 'react';
import { Modal } from 'react-bootstrap';
import SimpleModalContent from './SimpleModalContent';
import AdvancedModalContent from './AdvancedModalContent copy';
import { TfiClose } from "react-icons/tfi";
import { boolean } from 'yargs';

export interface IFilterModalProps {
  show: boolean;
  isFullscreen: boolean;
  type: string;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FilterModal(props: IFilterModalProps) {

  function getModalContent() {
    switch (props.type) {
      case 'simple':
        return <SimpleModalContent handleClose={props.handleClose} />
      case 'advanced':
        return <AdvancedModalContent isFullscreen={props.isFullscreen} handleClose={props.handleClose} />
    }
  }


  return (
    <>
      <Modal show={props.show}
        fullscreen={props.isFullscreen ? true : 'md-down'}
        style={{ zIndex: 1100 }}
      >
        <Modal.Header className="modal-base modal-bottom-border">
          <Modal.Title>Więcej filtrów</Modal.Title>
          <button className="input-base rounded-circle d-flex align-items-center p-2" onClick={() => props.handleClose(false)}>
            <TfiClose />
          </button>
        </Modal.Header >
        {getModalContent()}
      </Modal>
    </>
  );
}

import * as React from "react";
import { Form, Modal } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";

export interface IAdvancedModalContentProps {
  isFullscreen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdvancedModalContent(
  props: IAdvancedModalContentProps
) {
  return (
    <>
      <Modal.Header className="modal-base modal-bottom-border">
        <Modal.Title>Więcej filtrów</Modal.Title>
        <button
          className="btn-base rounded-circle d-flex align-items-center p-2"
          onClick={() => props.handleClose(false)}
        >
          <TfiClose />
        </button>
      </Modal.Header>
      <Modal.Body className="modal-base">
        <Form>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Zasięg</Form.Label>
            <Form.Range min={1} max={15} step={1} />
            <div className="d-flex align-items-center justify-content-center">
              <Form.Control
                type="number"
                placeholder="5km"
                className="input-search mb-3 w-50"
                style={{ maxWidth: "50vh" }}
              />
            </div>
          </Form.Group>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Cena</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>min.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="0"
                  className="input-search mb-3 w-100"
                />
              </div>
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>max.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="25"
                  className="input-search mb-3 w-100"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Gracze</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>min.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="0"
                  className="input-search mb-3 w-100"
                />
              </div>
              <div className="d-flex flex-column align-items-center ps-3 pe-3">
                <Form.Text>max.</Form.Text>
                <Form.Control
                  type="number"
                  placeholder="25"
                  className="input-search mb-3 w-100"
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="modal-bottom-border">
            <Form.Label>Data</Form.Label>
            <div className="d-flex align-items-center justify-content-between ps-3">
              <div className="d-flex flex-column align-items-center ">
                <Form.Text>od</Form.Text>
                <Form.Control
                  type="date"
                  defaultValue={new Date().toString()}
                  className="input-search mb-3 w-100"
                />
              </div>
              <div className="d-flex flex-column align-items-center pe-3">
                <Form.Text>do</Form.Text>
                <Form.Control type="date" className="input-search mb-3 w-100" />
              </div>
            </div>
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center  w-100 mt-3">
            <button className="btn-base btn-filled">Pokaż wydażenia</button>
          </div>
        </Form>
      </Modal.Body>
    </>
  );
}

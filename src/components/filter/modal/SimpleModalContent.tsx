import * as React from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

export interface ISimpleModalContentProps {
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SimpleModalContent(props: ISimpleModalContentProps) {
  const iconSize = 30;
  const iconColor = "white";

  let icons = [
    {
      icon: <BiFootball size={iconSize} style={{ color: `${iconColor}` }} />,
      name: "Piłka nozna",
    },
    {
      icon: (
        <FaVolleyballBall size={iconSize} style={{ color: `${iconColor}` }} />
      ),
      name: "Siatkówka",
    },
    {
      icon: (
        <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
      ),
      name: "Koszykówka",
    },
    {
      icon: <BiTennisBall size={iconSize} style={{ color: `${iconColor}` }} />,
      name: "Tenis",
    },
    {
      icon: <IoIosBicycle size={iconSize} style={{ color: `${iconColor}` }} />,
      name: "Rower",
    },
  ];
  return (
    <>
      <Modal.Header className="modal-base">
        <Modal.Title>Wyszukaj</Modal.Title>
        <button
          className="btn-base rounded-circle d-flex align-items-center p-2"
          onClick={() => props.handleClose(false)}
        >
          <TfiClose />
        </button>
      </Modal.Header>
      <Modal.Body className="modal-base p-0">
        <Form>
          <Form.Group className="position-fixed w-100 p-2">
            <div className="d-flex align-items-center justify-content-center">
              <Form.Control
                placeholder="lokalizacja"
                className="input-search mb-3"
                style={{ maxWidth: "50vh" }}
              />
            </div>
          </Form.Group>
          <Form.Group className="d-flex flex-column align-items-start gap-3 ps-2 modal-bottom-border">
            <div style={{ marginTop: 70 }}></div>
            {icons.map((data, key) => {
              return (
                <div className="d-flex align-items-center" key={key}>
                  <button
                    className="btn-rounded rounded-circle"
                    style={{ aspectRatio: "1/1" }}
                  >
                    {data.icon}
                  </button>
                  <p className="p-0 m-0 ms-3 fs-5">{data.name}</p>
                </div>
              );
            })}
            <div style={{ marginTop: 70 }}></div>
          </Form.Group>
          {/* <div className="d-flex align-items-center justify-content-center  w-100 mt-3"> */}
          <div className="position-fixed position-absolute bottom-0 end-1 d-flex align-items-center justify-content-center w-100">
            <button className="btn-base btn-filled">Pokaż wydażenia</button>
          </div>
          {/* <Container
            className="position-fixed position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center w-100"
            style={{
              padding: "5px 0px 5px 10px",
              backgroundColor: "#0A1929",
              height: 70,
              borderTop: "1px solid #103861",
            }}
          >
            <button className="input-base ">Pokaż wydażenia</button>
          </Container> */}
        </Form>
      </Modal.Body>
    </>
  );
}

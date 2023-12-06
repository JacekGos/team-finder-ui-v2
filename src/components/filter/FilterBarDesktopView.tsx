import { Button, Col, Form, Row } from "react-bootstrap";
import "./filterbar.css";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";
import { GiTennisBall } from "react-icons/gi";


export interface IFilterBarDesktopViewProps {
  handleModal: (isFullscreen: boolean, type: string) => void;
}

export default function FilterBarDesktopView(
  props: IFilterBarDesktopViewProps
) {
  const iconSize = 30;
  const iconColor = "white";

  return (
    <>
      <div>
        <Row className="d-flex" style={{ height: 90, background: "#1D2125" }}>
          <Col
            xs={2}
            sm={2}
            md={4}
            className="d-flex align-items-center justify-content-start ps-4"
          >
            <Form>
              <Form.Group>
                <Form.Control
                  placeholder="lokalizacja"
                  className="input-search"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            xs={3}
            sm={5}
            md={4}
            className="d-flex align-items-center justify-content-between"
          >
            <Button
              className="rounded-circle input-circle"
              style={{ aspectRatio: "1/1" }}
            >
              <BiFootball size={iconSize} 
              style={{ color: '#914950' }} />
              {/* style={{ color: `${iconColor}` }} /> */}
            </Button>
            <Button
              className="rounded-circle input-circle"
              style={{ aspectRatio: "1/1" }}
            >
              <FaVolleyballBall
                size={iconSize}
                // style={{ color: `${iconColor}` }}
                style={{ color: "#c5db1f" }}
              />
            </Button>
            <Button
              className="rounded-circle input-circle"
              style={{ aspectRatio: "1/1" }}
            >
              <FaBasketballBall
                size={iconSize}
                style={{ color: '#6b2210' }}
                // style={{ color: `${iconColor}` }}
              />
            </Button>
            <Button
              className="rounded-circle input-circle"
              style={{ aspectRatio: "1/1" }}
            >
              <GiTennisBall size={iconSize} 
              style={{ color: '#914950' }} />
              {/* style={{ color: `${iconColor}` }} /> */}
            </Button>
            <Button
              className="rounded-circle input-circle"
              style={{ aspectRatio: "1/1" }}
            >
              <IoIosBicycle size={iconSize} 
              style={{ color: '#EABC39' }} />
              {/* style={{ color: `${iconColor}` }} /> */}
            </Button>
          </Col>
          <Col
            xs={7}
            sm={5}
            md={4}
            className="d-flex align-items-center justify-content-end"
          >
            <button
              className="btn-base text-nowrap d-flex align-items-center"
              onClick={() => props.handleModal(false, "advanced")}
            >
              <BsSliders2 className="me-1 d-flex" />
              Więcej filtrów
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './filterbar.css';
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";

export interface IAppProps {
}

export default function Filterbar(props: IAppProps) {
    return (
        <div >
            <Row className="d-none d-lg-flex" style={{ height: 90, background: '#1D2125'}}>
                <Col xs={2} sm={2} md={4} className="d-flex align-items-center justify-content-start ps-4" >
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="lokalizacja" className="input-search" />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={3} sm={5} md={4} className="d-flex align-items-center justify-content-between">
                    <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                        <BiFootball size={35} style={{ color: "white" }} />
                    </Button>
                    <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                        <FaVolleyballBall size={35} style={{ color: "white" }} />
                    </Button>
                    <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                        <FaBasketballBall size={35} style={{ color: "white" }} />
                    </Button>
                    <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                        <BiTennisBall size={35} style={{ color: "white" }} />
                    </Button>
                    <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                        <IoIosBicycle size={35} style={{ color: "white" }} />
                    </Button>
                </Col>
                <Col xs={7} sm={5} md={4} className="d-flex align-items-center justify-content-end">
                    <Button className="input-filters text-nowrap d-flex align-items-center me-2"
                        // onClick={() => handleModal(false, 'advanced')}
                    >
                        <BsSliders2 className="me-1 d-none d-lg-flex" />
                        Więcej filtrów
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

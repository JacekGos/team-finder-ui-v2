import { Button, Col, Form, Row } from 'react-bootstrap';
import './filterbar.css';
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { BsSliders2 } from "react-icons/bs";

export interface IDesktopViewProps {
    handleModal: (isFullscreen: boolean, type: string) => void;
}

export default function DesktopView(props: IDesktopViewProps) {

    const iconSize = 35;
    const iconColor = 'white';

    return (
        <>
            <div >
                <Row className="d-none d-lg-flex" style={{ height: 90, background: '#1D2125' }}>
                    <Col xs={2} sm={2} md={4} className="d-flex align-items-center justify-content-start ps-4" >
                        <Form>
                            <Form.Group>
                                <Form.Control placeholder="lokalizacja" className="input-search" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={3} sm={5} md={4} className="d-flex align-items-center justify-content-between">
                        <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                            <BiFootball size={iconSize} style={{ color: `${iconColor}` }} />
                        </Button>
                        <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                            <FaVolleyballBall size={iconSize} style={{ color: `${iconColor}` }} />
                        </Button>
                        <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                            <FaBasketballBall size={iconSize} style={{ color: `${iconColor}` }} />
                        </Button>
                        <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                            <BiTennisBall size={iconSize} style={{ color: `${iconColor}` }} />
                        </Button>
                        <Button className="rounded-circle input-circle" style={{ aspectRatio: '1/1' }}>
                            <IoIosBicycle size={iconSize} style={{ color: `${iconColor}` }} />
                        </Button>
                    </Col>
                    <Col xs={7} sm={5} md={4} className="d-flex align-items-center justify-content-end">
                        <button className="button-filled text-nowrap d-flex align-items-center me-2"
                            onClick={() => props.handleModal(false, 'advanced')}
                        >
                            <BsSliders2 className="me-1 d-none d-lg-flex" />
                            Więcej filtrów
                        </button>
                    </Col>
                </Row>
            </div>
        </>
    );
}

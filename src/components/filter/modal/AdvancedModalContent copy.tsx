import * as React from 'react';
import { Container, Form, Modal } from 'react-bootstrap';
import { TfiClose } from "react-icons/tfi";
import { BiFootball, BiTennisBall } from "react-icons/bi";
import { FaVolleyballBall, FaBasketballBall } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";

export interface IAdvancedModalContentProps {
    isFullscreen: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AdvancedModalContent(props: IAdvancedModalContentProps) {


    return (
        <>
            <Modal.Header className="modal-base" style={{ borderBottom: '1px solid #103861' }}>
                <Modal.Title>Więcej filtrów</Modal.Title>
                <button className="input-base rounded-circle d-flex align-items-center p-2" onClick={() => props.handleClose(false)}>
                    <TfiClose />
                </button>
            </Modal.Header >
            <Modal.Body className="modal-base">
                <Form>
                    <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                        <Form.Label>
                            Zasięg
                        </Form.Label>
                        <Form.Range min={1} max={15} step={1} />
                        <div className="d-flex align-items-center justify-content-center">
                            <Form.Control type="number" placeholder="5km" className="input-base input-search mb-3 w-50" />
                        </div>
                    </Form.Group>
                    <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                        <Form.Label>
                            Cena
                        </Form.Label>
                        <div className="d-flex align-items-center">
                            <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                <Form.Text >min.</Form.Text>
                                <Form.Control type="number" placeholder="0" className="input-base input-search mb-3 w-100" />
                            </div>
                            <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                <Form.Text >max.</Form.Text>
                                <Form.Control type="number" placeholder="25" className="input-base input-search mb-3 w-100" />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group style={{ borderBottom: 'solid 1px #103861' }}>
                        <Form.Label>
                            Gracze
                        </Form.Label>
                        <div className="d-flex align-items-center">
                            <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                <Form.Text >min.</Form.Text>
                                <Form.Control type="number" placeholder="0" className="input-base input-search mb-3 w-100" />
                            </div>
                            <div className="d-flex flex-column align-items-center ps-3 pe-3">
                                <Form.Text >max.</Form.Text>
                                <Form.Control type="number" placeholder="25" className="input-base input-search mb-3 w-100" />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>
                            Data
                        </Form.Label>
                        <div className="d-flex align-items-center justify-content-between ps-3">
                            <div className="d-flex flex-column align-items-center ">
                                <Form.Text >od</Form.Text>
                                <Form.Control type="date" defaultValue={new Date().toString()} className="input-base input-search mb-3 w-100" />
                            </div>
                            <div className="d-flex flex-column align-items-center pe-3">
                                <Form.Text >do</Form.Text>
                                <Form.Control type="date" className="input-base input-search mb-3 w-100" />
                            </div>
                        </div>
                    </Form.Group>
                    {props.isFullscreen
                        ?
                        <Container className="position-fixed position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center w-100"
                            style={{ padding: '5px 0px 5px 10px', backgroundColor: '#0A1929', height: 70, borderTop: '1px solid #103861' }}>
                            <button className="input-base ">
                                Pokaż wydażenia
                            </button>
                        </Container>
                        :
                        <Container className="d-flex align-items-center justify-content-center w-100"
                            style={{ padding: '5px 0px 5px 10px', backgroundColor: '#0A1929', height: 70, borderTop: '1px solid #103861' }}>
                            <button className="input-base ">
                                Pokaż wydażenia
                            </button>
                        </Container>
                    }
                </Form>
            </Modal.Body>
        </>
    );
}

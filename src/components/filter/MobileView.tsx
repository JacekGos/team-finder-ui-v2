import { Button, Col, Row } from 'react-bootstrap';
import './filterbar.css';
import { SlMagnifier } from "react-icons/sl";

export interface IMobileViewProps {
    handleModal: (isFullscreen: boolean, type: string) => void;
}

export default function MobileView(props: IMobileViewProps) {
    console.log('mobile view')

    return (
        <>
            <Row className="d-flex d-lg-none position-fixed w-100" style={{ height: 90, padding: '8px 30px 1px 10px', backgroundColor: '#0A1929', marginTop: -10 }}>
                <Col className="d-flex align-items-center ps-0 overflow-scroll no-scrollbar">
                    <Button className="input-base rounded-circle me-2" onClick={() => props.handleModal(true, 'simple')}>
                        <SlMagnifier />
                    </Button>
                    <Button className="input-base text-nowrap d-flex align-items-center me-2" onClick={() => props.handleModal(true, 'advanced')}>
                        Więcej filtrów
                    </Button>
                </Col>
            </Row>
        </>
    );
}

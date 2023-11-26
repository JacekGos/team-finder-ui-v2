import * as React from 'react';
import './topbar.css';
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { RiTeamLine } from "react-icons/ri";


export interface IAppProps {
}

export default function Topbar(props: IAppProps) {

    return (
        <Navbar collapseOnSelect expand="lg" className="position-fixed position-absolute w-100 top-0 left-0">
            <Container fluid className='d-flex justify-content-center'>
                <Navbar.Brand className='mb-0' href="/">
                    <p className="brand-title">
                        <RiTeamLine />
                        Team-Finder
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Item>
                            <Nav.Link eventKey={1}>
                                Wydarzenia
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

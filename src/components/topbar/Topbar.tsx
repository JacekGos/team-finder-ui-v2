import * as React from 'react';
import './topbar.css';
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { RiTeamLine } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";



export interface IAppProps {
}

export default function Topbar(props: IAppProps) {

    return (
        <Navbar collapseOnSelect expand="lg" className="position-fixed position-absolute w-100 top-0 left-0">
            <Navbar.Brand className='mb-0' href="/">
                <p className="brand-title">
                    <RiTeamLine />
                    Team-Finder
                </p>
            </Navbar.Brand>
            <Navbar.Toggle>
                <TbMenu2 color='#62707a'/>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" />
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey={1} href="/events">
                            <div className='nav-item-not-filled'>
                                Wydarzenia
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey={2} href="/signin" >
                            <div className='nav-item-filled'>
                                Zaloguj
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

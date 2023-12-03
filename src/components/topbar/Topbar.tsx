import "./topbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { RiTeamLine } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export interface ITopbarProps {}

export default function Topbar(props: ITopbarProps) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="position-fixed w-100 top-0 left-0"
    >
      <Container fluid>
        <Navbar.Brand className="mb-0" href="/">
          <p className="brand-title">
            <RiTeamLine />
            Team-Finder
          </p>
        </Navbar.Brand>
        <Navbar.Toggle>
          <TbMenu2 color="#62707a" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav>
              <Nav.Item>
                <Nav.Link as={NavLink} to={"/events"} eventKey={1}>
                  <div className="nav-item-not-filled">Wydarzenia</div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link as={NavLink} to={"/signin"} eventKey={2}>
                <button className="btn-base btn-filled">Zaloguj</button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

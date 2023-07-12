import { Col, Row, Container, Navbar, Nav, Stack } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Details() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <span>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </span>
          <span className="ms-auto">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </span>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import TrackOrder from "../components/trackOrder";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavbarNav() {
  const [isTrackOrderOpen, setIsTrackOrderOpen] = useState(false);

  const openTrackOrder = () => {
    setIsTrackOrderOpen(true);
  };

  const closeTrackOrder = () => {
    setIsTrackOrderOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-3 z-4"
        sticky="top"
        style={{ height: "64px" }}
      >
        <Container fluid style={{ padding: "0" }}>
          <Navbar.Brand href="#">
            <img
              src="/images/logo.png"
              padding="8px"
              height="48px"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-center flex-grow-1 pe-3"
                style={{ gap: "6rem", fontSize: "18px" }}
              >
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/menu">
                  Menu
                </Nav.Link>
                <Nav.Link href="#trackOrder" onClick={openTrackOrder}>
                  Track Order
                </Nav.Link>
              </Nav>
              <div className="d-flex justify-content-end">
                <DropdownButton
                  id="dropdown-basic-button"
                  className="custom-dropdown-button"
                  title="Hi, Jaka Satria"
                  variant="outline-secondary"
                  align="end"
                  style={{ fontSize: "18px" }}
                >
                  <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/login">Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <TrackOrder isOpen={isTrackOrderOpen} onClose={closeTrackOrder} />
    </>
  );
}

export default NavbarNav;

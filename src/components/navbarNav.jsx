import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../styles/navbar.css";

function NavbarNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3" sticky="top">
        <Container fluid style={{ padding: "0" }}>
          <Navbar.Brand href="#">
            <img
              src="/images/logo.png"
              height="54"
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
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown
                  variant="outline-secondary"
                  title="Menu"
                  id="offcanvasNavbarDropdown"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <NavDropdown.Item href="#action1">Coffee</NavDropdown.Item>
                  <NavDropdown.Item href="#action2">
                    Non-Coffee
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action3">
                    Food & Baverages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Seasonal</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#trackOrder">Track Order</Nav.Link>
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
                  <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                </DropdownButton>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarNav;

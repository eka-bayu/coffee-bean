import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer
      className="footer text-light pt-5 pb-3"
      style={{ backgroundColor: "#9c6a42" }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Coffee Bean's</h5>
            <p>
              At Coffee Bean's, we believe coffee is more than just a drink –
              it’s a culture, an art, and a passion. Join us on a journey to
              discover the finest beans and perfect brews from around the world.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#menu" className="text-light">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-light">
                  Meet Our Team
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                className="text-light"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                className="text-light"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-light"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                className="text-light"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="mt-3">
              Coffee Bean's © {new Date().getFullYear()} | All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

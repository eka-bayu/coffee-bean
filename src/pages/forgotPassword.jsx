import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/forgotPassword.css";
import { CSSTransition } from "react-transition-group";



const ForgotPassword = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate(); // Mendeklarasikan navigate

  const handleSearchClick = (e) => {
    e.preventDefault();
    // Lakukan pengiriman kode konfirmasi di sini (misalnya, panggil API)
    setIsFlipped(true);
  };

  const handleCancelClick = () => {
    // Arahkan kembali ke halaman login
    navigate("/login");
  };

  return (
    <Container fluid className="login-container">
      <Row className="h-200">
        <Col md={6} className="login-form-col">
          <div className="logo-wrapper">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>
          <CSSTransition
            in={!isFlipped}
            timeout={500}
            classNames="flip"
            unmountOnExit
          >
            <div className="login-form-wrapper">
              <h2 style={{ color: "#3e2723" }}>Find Your Account</h2>
              <p className="loginTxt">
                Enter the email associated with your account to change your
                password.
              </p>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-full-width"
                  style={{
                    backgroundColor: "#9c6a42",
                    borderColor: "#6e4635",
                    marginBottom: "1rem",
                  }}
                  onClick={handleSearchClick}
                >
                  Search Your Account
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  className="btn-full-width"
                  style={{
                    color: "#9c6a42",
                    backgroundColor: "#ffffff",
                    borderColor: "#6e4635",
                  }}
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </Form>
            </div>
          </CSSTransition>

          <CSSTransition
            in={isFlipped}
            timeout={500}
            classNames="flip"
            unmountOnExit
          >
            <div className="login-form-wrapper">
              <h2 style={{ color: "#3e2723" }}>Email Sent</h2>
              <p className="loginTxt">
                A confirmation code has been sent to your email. Please check your
                inbox and enter the code to reset your password.
              </p>
            </div>
          </CSSTransition>
        </Col>

        <Col md={6} className="image-col">
          <div className="image-wrapper">
            <img
              src="/images/coffee-bg2.jpg"
              alt="coffee-background"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
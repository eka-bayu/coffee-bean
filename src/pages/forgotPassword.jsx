import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "../styles/forgotPassword.css";
import { CSSTransition } from "react-transition-group";

const ForgotPassword = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/forgot-password",
        {
          email,
        }
      );
      setMessage(response.data.message);
      setIsFlipped(true);
    } catch (error) {
      setError("Failed to send reset password email. Please try again.");
    }
  };

  const handleCancelClick = () => {
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
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                    color: "red",
                    backgroundColor: "#ffffff",
                    borderColor: "red",
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
                A confirmation code has been sent to your email. Please check
                your inbox and follow the instructions to reset your password.
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

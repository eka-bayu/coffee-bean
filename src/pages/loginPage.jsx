import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/loginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Container fluid className="login-container">
      <Row className="h-200">
        <Col md={6} className="login-form-col">
          <div className="logo-wrapper">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>
          <div className="login-form-wrapper">
            <h2 style={{ color: "#3e2723" }}>Welcome to Coffee Bean's!</h2>
            <p className="loginTxt">
              Please login first for your coffee experience
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-4 d-flex justify-content-between align-items-center">
                <Form.Check
                  type="checkbox"
                  id="rememberMe"
                  label="Remember me"
                />
                <a href="/login/forgotPassword" className="text-decoration">
                  Forgot password?
                </a>
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
              >
                Login
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="btn-full-width"
                style={{
                  color: "#9c6a42",
                  backgroundColor: "#ffffff",
                  borderColor: "#6e4635",
                }}
                onClick={() => navigate("/")}
              >
                Login as Guest
              </Button>
              <div className="signup-container">
                <p style={{ marginTop: "none", marginBottom: "0" }}>
                  Don't have an account?
                </p>
                <a href="#signUp" className="text-decoration">
                  Sign Up
                </a>
              </div>
            </Form>
          </div>
        </Col>

        {}
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

export default LoginPage;

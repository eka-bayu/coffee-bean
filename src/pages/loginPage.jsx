import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";
import "../styles/loginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;
      localStorage.setItem("token", token);

      auth.login(token);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
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
            {error && <Alert variant="danger">{error}</Alert>}{" "}
            {/* Display error alert */}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  required
                />
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
                type="button"
                className="btn-full-width"
                style={{
                  color: "#9c6a42",
                  backgroundColor: "#ffffff",
                  borderColor: "#6e4635",
                }}
                onClick={() => navigate("/")} // Guest login button
              >
                Login as Guest
              </Button>
              <div className="signup-container-main">
                <p style={{ marginTop: "none", marginBottom: "0" }}>
                  Don't have an account?
                </p>
                <a href="/login/signup" className="text-decoration">
                  Sign Up
                </a>
              </div>
            </Form>
          </div>
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

export default LoginPage;

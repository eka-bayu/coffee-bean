import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleResetClick = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Email untuk reset password masih static dari ethereal mail
    const userEmail = "shanelle.balistreri18@ethereal.email";

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/reset-password",
        {
          email: userEmail,
          token: token,
          newPassword: password,
        }
      );
      setMessage("Password has been reset successfully.");
      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      setError("Failed to reset password. Please try again.");
      console.error("Error during password reset:", error.response.data);
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
            <h2 style={{ color: "#3e2723" }}>Reset Your Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleResetClick}>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-full-width"
                style={{
                  backgroundColor: "#9c6a42",
                  borderColor: "#6e4635",
                }}
              >
                Reset Password
              </Button>
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

export default ResetPassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Joi from "joi";
import axios from "axios";
import "../styles/signUpPage.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    phone: Joi.string()
      .pattern(/^[0-9]+$/)
      .min(10)
      .max(15)
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .required(),
  });

  const checkPasswordStrength = (value) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setPasswordStrength(strongPasswordRegex.test(value) ? "Strong" : "Weak");
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { username, email, phone, password };

    // Validate form data using Joi
    const { error } = schema.validate(formData);
    if (error) {
      alert(error.details[0].message);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/signup",
        formData
      );
      if (response.status === 201) {
        alert("User registered successfully!");
        navigate("/login");
      } else {
        alert("Sign up failed. Please try again.");
      }
    } catch (err) {
      console.error("Sign-up error:", err);
      alert("Error during sign-up. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <Container fluid className="signup-container">
      <Row>
        <Col md={6} className="signup-form-col">
          <div className="logo-wrapper">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </div>
          <div className="signup-form-wrapper">
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => checkPasswordStrength(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  Password must be at least 8 characters long and include a mix
                  of uppercase, lowercase, numbers, and special characters.
                </Form.Text>
                <Form.Text
                  className={
                    passwordStrength === "Strong"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {passwordStrength} Password
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onClick={togglePasswordVisibility}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn-full-width"
                style={{
                  backgroundColor: "#9c6a42",
                  border: "rgb(110, 70, 53)",
                }}
              >
                Sign Up
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
                onClick={handleCancel}
              >
                Cancel
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

export default SignUpPage;

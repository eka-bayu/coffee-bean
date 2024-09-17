// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import ForgotPassword from "./pages/forgotPassword";
import HomePage from "./pages/homePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Definisikan Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/login/forgotpassword" element={<ForgotPassword />} /> {/* Forgot Password */}
          <Route path="/login" element={<LoginPage />} /> {/* Login Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

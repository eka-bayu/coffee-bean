// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LoginPage from "./pages/loginPage";
import ForgotPassword from "./pages/forgotPassword";
import HomePage from "./pages/homePage";
import MenuPage from "./pages/menuPage";
import "./App.css";
import "./styles/pageTransitions.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login/forgotpassword" element={<ForgotPassword />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function AnimatedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AnimatedApp;

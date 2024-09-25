import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AuthProvider } from "./context/authContext";
import LoginPage from "./pages/loginPage";
import ForgotPassword from "./pages/forgotPassword";
import HomePage from "./pages/homePage";
import MenuPage from "./pages/menuPage";
import OrderPage from "./pages/orderPage";
import SignUpPage from "./pages/signUp";
import ResetPassword from "./pages/resetPassword";
import "./App.css";
import "./styles/pageTransitions.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <div>
            {" "}
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login/forgotpassword"
                element={<ForgotPassword />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/login/signup" element={<SignUpPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order/:orderId" element={<OrderPage />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function AnimatedApp() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}

export default AnimatedApp;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "../styles/orderPage.css";

const OrderPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderData } = location.state || {};

  // Fungsi untuk menyalin Order ID ke clipboard
  const handleCopyClick = () => {
    if (orderData?.id) {
      navigator.clipboard.writeText(orderData.id);
      alert("Order ID copied to clipboard!");
    }
  };

  // Fungsi untuk kembali ke halaman utama
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="order-page">
      <h1>Order Summary</h1>
      <div className="order-id-container">
        <p>Order ID: {orderData?.id}</p>
        {/* Ikon Copy untuk menyalin Order ID */}
        <FontAwesomeIcon
          icon={faCopy}
          onClick={handleCopyClick}
          className="copy-icon"
          title="Copy Order ID"
        />
      </div>

      <p>Order Date: {orderData?.date}</p>
      <p>Order Time: {orderData?.time}</p>

      <h2>Ordered Items:</h2>
      <ul>
        {orderData?.items?.map((item) => (
          <li key={item.name}>
            {item.name} - {item.quantity} x Rp {item.price.toLocaleString()}
          </li>
        ))}
      </ul>

      <h3>Total Price: Rp {orderData?.totalPrice.toLocaleString()}</h3>

      {/* Tombol Back to Home */}
      <button onClick={handleBackToHome} className="back-to-home-btn">
        Back to Home
      </button>
    </div>
  );
};

export default OrderPage;

import React, { useState } from "react";
import axios from "axios";
import "../styles/trackOrder.css";

function TrackOrder({ isOpen, onClose }) {
  const [orderId, setOrderId] = useState("");
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");

  const handleTrackOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/order/${orderId}`
      );
      setOrderData(response.data);
      setError(""); // Reset error if successful
    } catch (err) {
      setError("Order not found. Please check the ID and try again.");
      setOrderData(null); // Reset order data if an error occurs
    }
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>

      <div className={`track-order ${isOpen ? "open" : ""}`}>
        <div className="track-order-content">
          <h2>Track Your Order</h2>
          <p>Enter your order ID to see the status of your order.</p>
          <input
            type="text"
            placeholder="Enter Order ID"
            className="form-control mb-3"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
          />
          <button
            className="btn btn-primary mb-2"
            style={{
              width: "260px",
              backgroundColor: "#9c6a42",
              border: "solid 0.5px rgb(110, 70, 53)",
              fontWeight: "300",
            }}
            onClick={handleTrackOrder}
          >
            Track Order
          </button>
          <button
            className="btn btn-secondary"
            onClick={onClose}
            style={{
              width: "260px",
              color: "red",
              backgroundColor: "#ffffff",
              border: "solid 0.5px red",
            }}
          >
            Close
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {orderData && (
            <div className="order-summary">
              <h3>Order Summary</h3>
              <p>Order ID: {orderData.id}</p>
              <p>Order Date: {orderData.date}</p>
              <p>Order Time: {orderData.time}</p>

              <h4>Ordered Items:</h4>
              <ul>
                {orderData.items.map((item) => (
                  <li key={item.name}>
                    {item.name} - {item.quantity} x Rp{" "}
                    {item.price.toLocaleString()}
                  </li>
                ))}
              </ul>

              <h4 className="total-price">
                Total Price: Rp {orderData.totalPrice.toLocaleString()}
              </h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TrackOrder;

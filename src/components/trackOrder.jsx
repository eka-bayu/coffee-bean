import React from "react";
import "../styles/trackOrder.css";

function TrackOrder({ isOpen, onClose }) {
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
          />
          <button
            className="btn btn-primary mb-2"
            style={{
              width: "260px",
              backgroundColor: "#9c6a42",
              border: "solid 0.5px rgb(110, 70, 53)",
              fontWeight: "300",
            }}
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
        </div>
      </div>
    </>
  );
}

export default TrackOrder;

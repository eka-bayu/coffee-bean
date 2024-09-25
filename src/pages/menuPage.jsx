import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbarNav";
import MenuItem from "../components/menuItems";
import menus from "../components/menus";
import "../styles/menuPage.css";

const MenuPage = () => {
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const currentQuantity = prevOrder[item.name]?.quantity || 0;
      return {
        ...prevOrder,
        [item.name]: { quantity: currentQuantity + 1, price: item.price },
      };
    });
  };

  const handleQuantityChange = (itemName, newQuantity) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      [itemName]: {
        ...prevOrder[itemName],
        quantity: newQuantity,
      },
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Order placed:", order);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const orderId = `ORD-${now.getTime()}`;
    const orderData = {
      id: orderId,
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      items: Object.entries(order).map(([name, { quantity, price }]) => ({
        name,
        quantity,
        price,
      })),
      totalPrice: Object.entries(order).reduce(
        (total, [_, { quantity, price }]) => total + quantity * price,
        0
      ),
    };

    try {
      await axios.post("http://localhost:3001/api/order", orderData);
      navigate(`/order/${orderId}`, { state: { orderData } });
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  const removeFromOrder = (itemName) => {
    setOrder((prevOrder) => {
      const updatedOrder = { ...prevOrder };
      delete updatedOrder[itemName];
      return updatedOrder;
    });
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  const totalPrice = Object.entries(order).reduce(
    (acc, [itemName, { quantity, price }]) => acc + quantity * price,
    0
  );

  const categories = [
    "All",
    "Coffee",
    "Non-Coffee",
    "Food & Snack",
    "Seasonal",
  ];
  const filteredMenus = menus.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <div className="menu-page">
      <Navbar />
      <div className="menu-content">
        <div className="menu-items">
          <h1>Our Menu</h1>
          <div className="filter-chips">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`chip ${activeFilter === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="menu-list">
            {filteredMenus.length > 0 ? (
              filteredMenus.map((item) => (
                <MenuItem key={item.id} item={item} addToOrder={addToOrder} />
              ))
            ) : (
              <p>No menu items available.</p>
            )}
          </div>
        </div>

        <div className="order-form">
          <h2>Your Order</h2>
          <form onSubmit={handleSubmit}>
            {Object.entries(order).length > 0 ? (
              Object.entries(order).map(([itemName, { quantity, price }]) => (
                <div key={itemName} className="form-group">
                  <label>
                    {itemName} - Rp {price.toLocaleString()}
                  </label>
                  <div className="quantity-control">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "#ffeacf",
                        color: "#9c6a42",
                        borderColor: "#9c6a42",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() =>
                        handleQuantityChange(
                          itemName,
                          Math.max(quantity - 1, 1)
                        )
                      }
                    >
                      <span className="material-icons">remove</span>
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{
                        backgroundColor: "#ffeacf",
                        color: "#9c6a42",
                        borderColor: "#9c6a42",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() =>
                        handleQuantityChange(itemName, quantity + 1)
                      }
                    >
                      <span className="material-icons">add</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeFromOrder(itemName)}
                      style={{ marginLeft: "10px" }}
                    >
                      <span className="material-icons" style={{ color: "red" }}>
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Please add items for your order.</p>
            )}

            <div className="total-price">
              <h3>Total: Rp {totalPrice.toLocaleString()}</h3>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#d59d73",
                border: "solid 0.5px #9c6a42",
                marginTop: "10px",
              }}
              disabled={Object.entries(order).length === 0}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

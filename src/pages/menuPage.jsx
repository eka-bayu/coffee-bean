import React from "react";
import Navbar from "../components/navbarNav";
import MenuList from "../components/menuList";
import menus from "../components/menus";
import "../styles/menuPage.css";

function MenuPage() {
  return (
    <div className="menu-page">
      <Navbar />
      <div className="menu-content">
        <div className="menu-list">
          <h1>Our Menu</h1>
          <MenuList className="menu-items" items={menus} />
        </div>

        <div className="order-form">
          <h2>Your Order</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="item">Item</label>
              <select id="item" className="form-control">
                <option>Select an item</option>
                {menus.map((menu, index) => (
                  <option key={index} value={menu.name}>
                    {menu.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                min="1"
                defaultValue="1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;

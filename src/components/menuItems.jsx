import React from "react";

const MenuItem = ({ item, addToOrder }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p className="price">{item.getFormattedPrice()}</p>
      <button
        className="btn btn-primary"
        onClick={() => addToOrder(item)}
        style={{
          marginTop: "10px",
          backgroundColor: "#9c6a42",
          border: "none",
        }}
      >
        Add to Order
      </button>
    </div>
  );
};

export default MenuItem;

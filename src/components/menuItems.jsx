import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.getFormattedPrice()}</p>
    </div>
  );
};

export default MenuItem;

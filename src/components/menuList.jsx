import React, { useState } from "react";
import MenuItem from "./menuItems";

const MenuList = ({ items }) => {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <div>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange("All")}>All</button>
        <button onClick={() => handleCategoryChange("Coffee")}>Coffee</button>
        <button onClick={() => handleCategoryChange("Non-Coffee")}>
          Non-Coffee
        </button>
        <button onClick={() => handleCategoryChange("Food & Snack")}>
          Food & Baverages
        </button>
        <button onClick={() => handleCategoryChange("Seasonal")}>
          Seasonal
        </button>
      </div>
      <div className="menu-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <MenuItem key={item.id} item={item} />)
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default MenuList;

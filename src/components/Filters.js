import React from "react";

const Filters = ({ activeCategory, setActiveCategory, selectedCount }) => {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
        >
          {cat} {activeCategory === cat ? `(${selectedCount})` : ""}
        </button>
      ))}
    </div>
  );
};

export default Filters;

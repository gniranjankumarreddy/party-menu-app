import React from "react";

const DishCard = ({ dish, isSelected, toggleSelect }) => {
  return (
    <div className="dish-card">
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p>
          {dish.description.substring(0, 50)}...{" "}
          <span className="read-more">Read more</span>
        </p>
        <span className="ingredient">🍲 Ingredient</span>
      </div>
      <div className="dish-actions">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <button
          onClick={() => toggleSelect(dish.id)}
          className={`add-btn ${isSelected ? "remove" : "add"}`}
        >
          {isSelected ? "Remove -" : "Add +"}
        </button>
      </div>
    </div>
  );
};

export default DishCard;

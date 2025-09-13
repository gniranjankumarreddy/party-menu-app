import React, { useState } from "react";
import DishCard from "./DishCard";
import Filters from "./Filters";

const DishList = ({ dishes }) => {
  const [search, setSearch] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("MAIN COURSE");

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.mealType === activeCategory &&
      dish.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedByCuisine = filteredDishes.reduce((acc, dish) => {
    if (!acc[dish.cuisine]) acc[dish.cuisine] = [];
    acc[dish.cuisine].push(dish);
    return acc;
  }, {});

  const toggleSelectDish = (id) => {
    if (selectedDishes.includes(id)) {
      setSelectedDishes(selectedDishes.filter((d) => d !== id));
    } else {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  return (
    <div className="dish-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search dishes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Filters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        selectedCount={selectedDishes.length}
      />

      {Object.keys(groupedByCuisine).map((cuisine) => (
        <div key={cuisine} className="cuisine-section">
          <h2 className="cuisine-title">{cuisine}</h2>
          {groupedByCuisine[cuisine].map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              isSelected={selectedDishes.includes(dish.id)}
              toggleSelect={toggleSelectDish}
            />
          ))}
        </div>
      ))}

      <div className="footer">
        <p>Total Dishes Selected {selectedDishes.length}</p>
        <button className="continue-btn">Continue →</button>
      </div>
    </div>
  );
};

export default DishList;

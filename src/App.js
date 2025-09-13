import React from "react";
import DishList from "./components/DishList";
import { DISHES } from "./data/mockDishes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DishList dishes={DISHES} />
    </div>
  );
}

export default App;

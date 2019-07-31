import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Suggestions from "./components/Suggestions";

function App() {
  const [dishes, setDishes] = React.useState([]);

  function handleDishChange(newDishes) {
    setDishes(newDishes);
  }

  return (
    <div>
      <Search onFoodInput={handleDishChange} />
      <Results dishes={dishes} />
      <Suggestions />
    </div>
  );
}

export default App;

import React from "react";
import Search from "../components/Search";
import Results from "../components/Results";
//import AddCarousel from "../components/AddCarousel";
//import Suggestions from "../components/Suggestions";

function GetIdeas({ onMealSelect, history }) {
  const [dishes, setDishes] = React.useState([]);

  function handleDishChange(newDishes) {
    setDishes(newDishes);
  }

  function handleMealSelect(meal) {
    onMealSelect(meal);
    history.push("/planner");
  }

  return (
    <>
      <Search onFoodInput={handleDishChange} />
      <Results dishes={dishes} onMealSelect={handleMealSelect} />
      {/* <AddCarousel dishes={dishes} /> */}
      {/* <Suggestions /> */}
    </>
  );
}

export default GetIdeas;

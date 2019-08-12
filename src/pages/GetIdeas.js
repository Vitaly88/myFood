import React from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import AddCarousel from "../components/AddCarousel";
import { searchFood } from "../utils/mealApi";
import PropTypes from "prop-types";
//import styled from "styled-components";
import Suggestions from "../components/Suggestions";

function GetIdeas({ onMealSelect, history }) {
  const [dishes, setDishes] = React.useState(null);
  const [hits, setHits] = React.useState([]);

  React.useEffect(() => {
    searchFood("").then(result => setHits(result.slice(0, 10)));
  }, []);

  //console.log(hits);

  function handleDishChange(dishes) {
    setDishes(dishes);
  }

  function handleMealSelect(meal) {
    onMealSelect(meal);
    history.push("/planner");
  }

  // function handleBackClick() {
  //   setDishes(false);
  // }

  if (dishes) {
    return (
      <div>
        <Search onFoodInput={handleDishChange} />
        <Results dishes={dishes} onMealSelect={handleMealSelect} />
      </div>
    );
  }

  return (
    <>
      <Search onFoodInput={handleDishChange} />
      <AddCarousel dishes={hits} />
      <Suggestions />
    </>
  );
}

GetIdeas.propTypes = {
  onMealSelect: PropTypes.func.isRequired,
  dishes: PropTypes.object.isRequired
  // history: PropTypes.object.isRequired
};

export default GetIdeas;

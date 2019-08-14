import React from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import AddCarousel from "../components/AddCarousel";
import { searchFood, getCategory } from "../utils/mealApi";
import PropTypes from "prop-types";
//import styled from "styled-components";
import Suggestions from "../components/Suggestions";

function GetIdeas({ onMealSelect, history }) {
  const [dishes, setDishes] = React.useState(null);
  const [hits, setHits] = React.useState([]);
  const [suggestions, setSuggestions] = React.useState([]);
  const [suggestions2, setSuggestions2] = React.useState([]);

  React.useEffect(() => {
    searchFood("salad").then(result => setHits(result.slice(0, 10)));
  }, []);

  React.useEffect(() => {
    getCategory("seafood").then(result => setSuggestions(result.slice(0, 5)));
  }, []);

  React.useEffect(() => {
    getCategory("vegetarian").then(result =>
      setSuggestions2(result.slice(0, 5))
    );
  }, []);

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
      <h2>This week recommendations</h2>
      <Suggestions dishes={suggestions} />
      <h2>Vegetarian Dishes</h2>
      <Suggestions dishes={suggestions2} />
    </>
  );
}

GetIdeas.propTypes = {
  onMealSelect: PropTypes.func.isRequired,
  dishes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default GetIdeas;

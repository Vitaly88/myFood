import React from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import AddCarousel from "../components/AddCarousel";
import { searchFood, getCategory } from "../utils/mealApi";
import PropTypes from "prop-types";
import styled from "styled-components";
import Suggestions from "../components/Suggestions";

const StyledSubHeadlines = styled.h2`
  color: #5938e0;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 28px;
  margin-left: 20px;
`;

function GetIdeas({ onMealSelect, history }) {
  const [dishes, setDishes] = React.useState(null);
  const [hits, setHits] = React.useState([]);
  const [breakfast, setBreakfast] = React.useState([]);
  const [lunch, setLunch] = React.useState([]);
  const [dinner, setDinner] = React.useState([]);
  const [dessert, setDessert] = React.useState([]);

  React.useEffect(() => {
    searchFood("salad").then(result => setHits(result.slice(0, 10)));
  }, []);

  React.useEffect(() => {
    getCategory("breakfast").then(result => setBreakfast(result.slice(0, 6)));
  }, []);

  React.useEffect(() => {
    getCategory("beef", "vegetarian").then(result =>
      setLunch(result.slice(0, 6))
    );
  }, []);

  React.useEffect(() => {
    getCategory("chicken", "lamb").then(result =>
      setDinner(result.slice(0, 6))
    );
  }, []);

  React.useEffect(() => {
    getCategory("dessert").then(result => setDessert(result.slice(0, 6)));
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
      <StyledSubHeadlines>Ideas for Breakfast</StyledSubHeadlines>
      <Suggestions dishes={breakfast} />
      <StyledSubHeadlines>Lunch</StyledSubHeadlines>
      <Suggestions dishes={lunch} />
      <StyledSubHeadlines>Dinner</StyledSubHeadlines>
      <Suggestions dishes={dinner} />
      <StyledSubHeadlines>Desserts</StyledSubHeadlines>
      <Suggestions dishes={dessert} />
    </>
  );
}

GetIdeas.propTypes = {
  onMealSelect: PropTypes.func.isRequired,
  dishes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default GetIdeas;

import React from "react";
//import styled from "styled-components";
import Headline from "../components/Headline";
import Oval from "../components/Oval";

// const PlannerContainer = styled(Headline)`
//   color: black;
// `;

function MealPlanner({ meals }) {
  console.log(meals);
  return (
    <>
      <Oval />
      <Headline>Meal Planner</Headline>|
    </>
  );
}

export default MealPlanner;

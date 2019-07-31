import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";

const PlannerContainer = styled.div`
  color: #5938e0;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 17px;
`;

function MealPlanner() {
  return (
    <>
      <Headline size="L">Meal Planner</Headline>
      <PlannerContainer>Hello</PlannerContainer>
    </>
  );
}

export default MealPlanner;

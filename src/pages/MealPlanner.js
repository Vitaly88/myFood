import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Oval from "../components/Oval";
import Header from "../components/Header";

const StyledImage = styled.img`
  width: 110px;
  height: 110px;
  box-shadow: 15px 15px 30px grey;
  border-radius: 20px;
  margin: 20px;
  filter: contrast(110%);
  filter: brightness(110%);
`;

const GroupedInfo = styled.div`
  position: relative;
  top: 70px;
  color: #5938e0;
  align-items: center;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 17px;
  font-weight: bold;
  margin: 10px;
`;

const MealList = styled.div`
  margin: 25px;
  color: #5938e0;
`;

function MealPlanner({ meals }) {
  console.log(meals);
  return (
    <>
      <Oval />
      <Header title="Meal Planner" />
      <GroupedInfo>
        {meals.map(dish => (
          <>
            <div>{dish.date}</div>
            <Headline size="S">{dish.mealType.toUpperCase()}</Headline>
            <div key={dish.title}>
              <StyledImage alt={dish.title} src={dish.image} />
              <MealList>{dish.title}</MealList>
            </div>
          </>
        ))}
      </GroupedInfo>
    </>
  );
}

export default MealPlanner;

import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import Oval from "../components/Oval";

const PlannerContainer = styled(Headline)`
  color: white;
`;

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
      <PlannerContainer size="L" title="Meal Planner" />
      <br />
      <br />
      <br />
      <GroupedInfo>
        {meals.map(dish => (
          <>
            <div>{dish.date}</div>
            <Headline size="M" title={dish.mealType}>
              {dish.mealType}
            </Headline>
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

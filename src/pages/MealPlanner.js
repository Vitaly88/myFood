import React from "react";
import styled from "styled-components";
import Oval from "../components/Oval";
import Header from "../components/Header";
import GroupPicTitle from "../components/GroupPicTitle";

const GroupedInfo = styled.div`
  position: relative;
  top: 70px;
  margin: 10px;
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
            <div>{dish.mealType.toUpperCase()}</div>
            <GroupPicTitle name={dish.title} imageSrc={dish.image} />
          </>
        ))}
      </GroupedInfo>
    </>
  );
}

export default MealPlanner;

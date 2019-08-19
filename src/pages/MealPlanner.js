import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";
import { getMealsFromStorage, setMealsToStorage } from "../utils/storage";

const GroupedInfo = styled.div`
  margin: 10px;
  color: #5938e0;
`;

const Headlines = styled.div`
  margin: 10px;
`;

const StyledText = styled.div`
  font-size: 14px;
`;
const StyledDate = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
function MealPlanner({ meals }) {
  const [mealsList, setMealsList] = React.useState(getMealsFromStorage());

  const handleMealsList = id => {
    const filteredItems = mealsList.filter(dish => dish.mealId !== id);
    setMealsToStorage(filteredItems);
    const newMeals = [...mealsList];
    setMealsList(newMeals);
  };

  return (
    <>
      <Headline size="L">Meal Planner</Headline>
      <GroupedInfo>
        {meals
          .map((dish, index) => (
            <div key={dish.mealId}>
              <Headlines>
                <StyledDate>{dish.date}</StyledDate>
                <br />
                <StyledText>{dish.mealType.toUpperCase()}</StyledText>
              </Headlines>
              <GroupPicTitle
                dish={dish}
                name={dish.title}
                imageSrc={dish.image}
                onDeleteDish={() => handleMealsList(dish.mealId)}
              />
            </div>
          ))
          .slice(0, 21)}
      </GroupedInfo>
    </>
  );
}

export default MealPlanner;

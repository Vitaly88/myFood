import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";
import PropTypes from "prop-types";

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
function MealPlanner({ meals, onMealDelete }) {
  return (
    <>
      <Headline data-cy="header-title" size="L">
        Meal Planner
      </Headline>
      <GroupedInfo>
        {meals
          .map(dish => (
            <div key={dish._id}>
              <Headlines>
                <StyledDate>{dish.date}</StyledDate>
                <br />
                <StyledText>{dish.mealType.toUpperCase()}</StyledText>
              </Headlines>
              <GroupPicTitle
                dish={dish}
                name={dish.title}
                imageSrc={dish.image}
                onDeleteDish={() => onMealDelete(dish._id)}
              />
            </div>
          ))
          .slice(0, 21)}
      </GroupedInfo>
    </>
  );
}

MealPlanner.propTypes = {
  meals: PropTypes.array.isRequired,
  onMealDelete: PropTypes.func.isRequired
};
export default MealPlanner;

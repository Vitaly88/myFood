import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";

const GroupedInfo = styled.div`
  /* position: relative; */
  margin: 10px;
  color: #5938e0;
`;

const Headlines = styled.div`
  margin: 10px;
`;

function MealPlanner({ meals, mealId }) {
  const [deleteItem, setDeleteItem] = React.useState([]);

  function handleDeleteDish() {
    setDeleteItem();
  }

  return (
    <>
      <Headline size="L">Meal Planner</Headline>
      <GroupedInfo>
        {meals
          .map(dish => (
            <>
              <Headlines>
                <h3>{dish.date}</h3>
                <br />
                <div>{dish.mealType.toUpperCase()}</div>
              </Headlines>
              <GroupPicTitle
                key={mealId}
                name={dish.title}
                imageSrc={dish.image}
                onDeleteDish={() => setDeleteItem()}
              />
            </>
          ))
          .slice(0, 21)}
      </GroupedInfo>
    </>
  );
}

export default MealPlanner;

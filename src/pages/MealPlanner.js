import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";

const GroupedInfo = styled.div`
  /* position: relative; */
  margin-top: 200px;
  margin: 10px;
  color: #5938e0;
`;

const Headlines = styled.div`
  margin: 20px;
`;

function MealPlanner({ meals }) {
  const [deleteItem, setDeleteItem] = React.useState([]);

  function handleDeleteDish() {
    setDeleteItem();
  }

  return (
    <>
      <Headline title="Meal Planner" />
      <GroupedInfo>
        {meals.map(dish => (
          <>
            <Headlines>
              <h3>{dish.date}</h3>
              <br />
              <div>{dish.mealType.toUpperCase()}</div>
            </Headlines>
            <GroupPicTitle
              name={dish.title}
              imageSrc={dish.image}
              onDeleteDish={() => setDeleteItem()}
            />
          </>
        ))}
      </GroupedInfo>
    </>
  );
}

export default MealPlanner;

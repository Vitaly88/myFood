import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddButton from "./AddButton";
import SaveToMeals from "./SaveToMeals";

const IconImage = styled.img`
  width: 110px;
  height: 110px;
  box-shadow: 15px 15px 30px grey;
  border-radius: 20px;
  margin: 20px;
  filter: contrast(110%);
  filter: brightness(110%);
`;

const TextDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #5938e0;
  align-items: left;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 17px;
  font-weight: bold;
  margin: 5px;
`;

const BoxFoundItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: left;
  align-items: center;
`;

// const DietTag = styled.button`
//   padding: 5px 3px;
//   background-color: #5938e0;
//   color: white;
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 10px;
//   font-weight: bold;
//   border-radius: 20px;
// `;

function Results({ dishes }) {
  // if (dishes.length === 0) {
  //   return <div>Sorry, I can't find anything.</div>;
  // }
  const [selectedDish, setSelectedDish] = React.useState(null);

  // const [saveDish, setSaveDish] = React.useState("");

  // function handleSaveSubmit(dish) {
  //   setSaveDish(dish);
  // }

  function handleSelectDish(dish) {
    setSelectedDish(dish);
  }

  function handleTimeSelect(result) {
    console.log(result);
  }

  if (selectedDish) {
    return (
      <div>
        <BoxFoundItems key={selectedDish.name}>
          <IconImage alt={selectedDish.name} src={selectedDish.imageSrc} />
          <TextDescription>
            {selectedDish.name}
            {/* {dishes.map(dish => (
              <DietTag>{dish.diet}</DietTag>
            ))} */}
          </TextDescription>
        </BoxFoundItems>
        {selectedDish && <SaveToMeals onTimeSelect={handleTimeSelect} />}
      </div>
    );
  }

  return (
    <div>
      {dishes.map(dish => (
        <BoxFoundItems key={dish.name}>
          <IconImage alt={dish.name} src={dish.imageSrc} />
          <TextDescription>
            {dish.name}
            {/* {dishes.map(dish => (
              <DietTag>{dish.diet}</DietTag>
            ))} */}
          </TextDescription>
          <AddButton onClick={() => handleSelectDish(dish)} />
        </BoxFoundItems>
      ))}
    </div>
  );
}

Results.propTypes = {
  dishes: PropTypes.array.isRequired
};

export default Results;

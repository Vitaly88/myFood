import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PopUpDatePicker from "./PopUpDatePicker";
import GroupPicTitle from "./GroupPicTitle";

const StyledResults = styled.div`
  margin-top: 120px;
`;

function Results({ dishes, onMealSelect }) {
  const [selectedDish, setSelectedDish] = React.useState(null);

  function handleSelectDish(dish) {
    setSelectedDish(dish);
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  function handleTimeSelect(result) {
    const newMeal = {
      _id: selectedDish._id,
      mealId: selectedDish.mealId,
      mealType: result.mealType,
      date: result.day.toLocaleDateString("en-US", options),
      title: selectedDish.name,
      image: selectedDish.imageSrc,
      ingredients: selectedDish.ingredients,
      measure: selectedDish.measure
    };
    onMealSelect(newMeal);
  }

  if (selectedDish) {
    return (
      <StyledResults>
        <GroupPicTitle
          key={selectedDish._id}
          dish={selectedDish}
          name={selectedDish.name}
          imageSrc={selectedDish.imageSrc}
        />
        {selectedDish && <PopUpDatePicker onTimeSelect={handleTimeSelect} />}
      </StyledResults>
    );
  }

  return (
    <StyledResults>
      {dishes.map(dish => (
        <GroupPicTitle
          key={dish._id}
          dish={dish}
          name={dish.name}
          imageSrc={dish.imageSrc}
          onSelectDish={() => handleSelectDish(dish)}
        />
      ))}
    </StyledResults>
  );
}

Results.propTypes = {
  dishes: PropTypes.array.isRequired,
  onMealSelect: PropTypes.func.isRequired
};

export default Results;

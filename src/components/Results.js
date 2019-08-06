import React from "react";
import PropTypes from "prop-types";
//import styled from "styled-components";
import PopUpDatePicker from "./PopUpDatePicker";
import GroupPicTitle from "./GroupPicTitle";

function Results({ dishes, onMealSelect }) {
  // if (dishes.length === 0) {
  //   return <div>Sorry, I can't find anything.</div>;
  // }
  const [selectedDish, setSelectedDish] = React.useState(null);
  const [openRecipe, setOpenRecipe] = React.useState(null);

  function handleSelectDish(dish) {
    setSelectedDish(dish);
  }

  function handleOpenRecipe(selectedDish) {
    setOpenRecipe(selectedDish);
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  function handleTimeSelect(result) {
    const newMeal = {
      mealType: result.mealType,
      date: result.day.toLocaleDateString("en-US", options),
      title: selectedDish.name,
      image: selectedDish.imageSrc
    };
    onMealSelect(newMeal);
  }

  if (selectedDish) {
    return (
      <div>
        <GroupPicTitle
          name={selectedDish.name}
          imageSrc={selectedDish.imageSrc}
          onOpenRecipe={() => handleOpenRecipe(selectedDish)}
        />
        {selectedDish && <PopUpDatePicker onTimeSelect={handleTimeSelect} />}
      </div>
    );
  }

  if (openRecipe) {
    return (
      <div>
        <img alt={selectedDish.name} src={selectedDish.imageSrc} />

        <p>{selectedDish.recipe}</p>
      </div>
    );
  }

  return (
    <div>
      {dishes.map(dish => (
        <GroupPicTitle
          name={dish.name}
          imageSrc={dish.imageSrc}
          onSelectDish={() => handleSelectDish(dish)}
          onOpenRecipe={() => handleOpenRecipe(selectedDish)}
        />
      ))}
    </div>
  );
}

Results.propTypes = {
  dishes: PropTypes.array.isRequired
};

export default Results;

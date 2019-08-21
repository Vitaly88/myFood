import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { fadeIn } from "../utils/animations";

const PopUpForm = styled.form`
  display: flex;
  flex-direction: column;
  color: #5938e0;
  align-items: center;
  justify-content: center;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 17px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #5938e0;
  width: 100vw;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  opacity: 0.9;
  bottom: 60px;
  animation: ${fadeIn} 1s 1 both;
  position: fixed;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddMealButton = styled.button`
  width: 130px;
  height: 35px;
  border-radius: 10px;
  background-color: #5938e0;
  color: white;
  font-family: "Arial", "Helvetica", sans-serif;
  margin-bottom: 20px;
`;

function PopUpDatePicker({ onTimeSelect }) {
  const [selectedDay, setSelectedDay] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(null);

  function handleAddMeal(event) {
    event.preventDefault();

    onTimeSelect({ day: selectedDay, mealType: selectedOption });
  }
  const modifiersStyles = {
    today: {
      color: "#fff",
      backgroundColor: "#5938e0"
    }
  };

  function handleDayClick(day, { selected }) {
    setSelectedDay(day);
  }

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <PopUpForm onSubmit={handleAddMeal}>
      <DayPicker
        onDayClick={handleDayClick}
        firstDayOfWeek={1}
        modifiersStyles={modifiersStyles}
      />
      <RadioGroup>
        <label>
          <input
            type="radio"
            name="meal-type"
            value="breakfast"
            checked={selectedOption === "breakfast"}
            onChange={handleOptionChange}
          />
          Breakfast
        </label>
        <label>
          <input
            type="radio"
            name="meal-type"
            value="lunch"
            checked={selectedOption === "lunch"}
            onChange={handleOptionChange}
          />
          Lunch
        </label>
        <label>
          <input
            type="radio"
            name="meal-type"
            value="dinner"
            checked={selectedOption === "dinner"}
            onChange={handleOptionChange}
          />
          Dinner
        </label>
      </RadioGroup>
      <br />
      <AddMealButton>Add to Meal Planner</AddMealButton>
    </PopUpForm>
  );
}

PopUpDatePicker.propTypes = {
  onTimeSelect: PropTypes.func.isRequired
};
export default PopUpDatePicker;

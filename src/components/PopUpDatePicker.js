import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { fadeIn } from "../utils/animations";
import RadioGroup from "../components/RadioGroup";

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

const AddMealButton = styled.button`
  width: 130px;
  height: 35px;
  border-radius: 10px;
  background-color: #5938e0;
  color: white;
  font-family: "Arial", "Helvetica", sans-serif;
  margin-bottom: 20px;
`;

const StyledError = styled.div`
  color: #a11035;
`;

function PopUpDatePicker({ onTimeSelect }) {
  const [selectedDay, setSelectedDay] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  function validate() {
    const errors = {};

    if (selectedDay === "") {
      errors.selectedDay = "Please select the date!";
    }

    if (selectedOption === null) {
      errors.selectedOption = "Please select the type of the meal!";
    }
    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleAddMeal(event) {
    event.preventDefault();

    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }
    onTimeSelect({ day: selectedDay, mealType: selectedOption });
  }
  const modifiersStyles = {
    today: {
      color: "#fff",
      backgroundColor: "#5938e0"
    },
    selectedDay: {
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
        name="date"
      />
      {errors.selectedDay && <StyledError>{errors.selectedDay}</StyledError>}
      <br />
      <RadioGroup
        mealType={selectedOption}
        onRadioSelect={handleOptionChange}
      />
      <br />
      {errors.selectedOption && (
        <StyledError>{errors.selectedOption}</StyledError>
      )}
      <br />
      <AddMealButton>Add to Meal Planner</AddMealButton>
    </PopUpForm>
  );
}

PopUpDatePicker.propTypes = {
  onTimeSelect: PropTypes.func.isRequired
};
export default PopUpDatePicker;

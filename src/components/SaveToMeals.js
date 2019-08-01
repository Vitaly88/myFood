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
  background-color: #e6e6e6;
  width: 100vw;
  border-radius: 20px;
  opacity: 0.9;
  bottom: 0;
  /* filter: grayscale(0.7) saturate(0.8); */
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
`;

function SaveToMeals({ onTimeSelect }) {
  function handleSubmit(event) {
    event.preventDefault();

    onTimeSelect({
      slot: "meal"
    });
  }

  const modifiersStyles = {
    today: {
      color: "#fff",
      backgroundColor: "#5938e0"
    }
  };

  return (
    <PopUpForm onSubmit={handleSubmit}>
      <DayPicker
        // onDayClick={modifiersStyles}
        firstDayOfWeek={1}
        modifiersStyles={modifiersStyles}
      />
      <label>
        <input type="radio" name="slot" />
        Breakfast
      </label>
      <label>
        <input type="radio" name="slot" />
        Lunch
      </label>
      <label>
        <input type="radio" name="slot" />
        Dinner
      </label>
      <br />
      <AddMealButton>Add to Meal Planner</AddMealButton>
    </PopUpForm>
  );
}
export default SaveToMeals;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

function RadioGroup({ onRadioSelect, mealType }) {
  return (
    <StyledRadioGroup>
      <label>
        <input
          type="radio"
          name="meal-type"
          value="breakfast"
          checked={mealType === "breakfast"}
          onChange={onRadioSelect}
        />
        Breakfast
      </label>
      <label>
        <input
          type="radio"
          name="meal-type"
          value="lunch"
          checked={mealType === "lunch"}
          onChange={onRadioSelect}
        />
        Lunch
      </label>
      <label>
        <input
          type="radio"
          name="meal-type"
          value="dinner"
          checked={mealType === "dinner"}
          onChange={onRadioSelect}
        />
        Dinner
      </label>
    </StyledRadioGroup>
  );
}

RadioGroup.propTypes = {
  mealType: PropTypes.string,
  onRadioSelect: PropTypes.func.isRequired
};

RadioGroup.defaultProps = {
  mealType: null
};

export default RadioGroup;

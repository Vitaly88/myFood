import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Headline from "../components/Headline";
import uuid from "uuid/v4";

const StyledIngredients = styled.div`
  display: flex;
  color: #5938e0;
  justify-content: center;
  margin: 20px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  border: none;
`;

const StyledHead = styled.thead`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`;

const StyledBody = styled.tbody`
  text-align: left;
`;
const StyledRows = styled.tr`
  width: 100px;
`;

const StyledDiv = styled.div`
  font-size: 14px;
  margin: 5px 0;
  text-align: left;
`;

const StyledTd = styled.td`
  text-align: center;
  padding: 10px 20px;
`;

function GroceryList({ meals }) {
  const ingredients = meals.map(meal => meal.ingredients).flat();
  const measure = meals.map(meal => meal.measure).flat();
  return (
    <>
      <Headline size="L">Grocery List</Headline>

      <StyledIngredients>
        <StyledTable>
          <StyledHead>
            <tr>
              <th>Ingredients</th>
              <th>Amount</th>
            </tr>
          </StyledHead>
          <StyledBody>
            <StyledRows>
              <StyledTd>
                {ingredients.map(elem => (
                  <StyledDiv key={uuid()}>{elem}</StyledDiv>
                ))}
              </StyledTd>
              <StyledTd>
                {measure.map(elem => (
                  <StyledDiv key={uuid()}>{elem}</StyledDiv>
                ))}
              </StyledTd>
            </StyledRows>
          </StyledBody>
        </StyledTable>
      </StyledIngredients>
    </>
  );
}

GroceryList.propTypes = {
  meals: PropTypes.array.isRequired
};

export default GroceryList;

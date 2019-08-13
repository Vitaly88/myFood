import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
import Headline from "../components/Headline";

const StyledIngredients = styled.div`
  color: #5938e0;
  margin-left: 20px;
`;

const StyledContent = styled.td`
  text-align: center;
`;

const StyledHead = styled.thead`
  font-size: 24px;
`;

const StyledBack = styled.div`
  background-color: white;
  padding: 5px;
`;
function GroceryList({ meals, mealId }) {
  const ingredients = meals.map(meal => meal.ingredients).flat();
  const measure = meals.map(meal => meal.measure).flat();
  return (
    <>
      <Headline size="L">Grocery List</Headline>

      <StyledIngredients>
        <table>
          <StyledHead>
            <tr>
              <th>Ingredients</th>
              <th>Amount</th>
            </tr>
          </StyledHead>
          <tbody>
            <tr>
              <td>
                {ingredients.map(elem => (
                  <StyledBack key={mealId}>{elem}</StyledBack>
                ))}
              </td>
              <StyledContent>
                {measure.map(elem => (
                  <StyledBack key={mealId}>{elem}</StyledBack>
                ))}
              </StyledContent>
            </tr>
          </tbody>
        </table>
      </StyledIngredients>
    </>
  );
}

export default GroceryList;

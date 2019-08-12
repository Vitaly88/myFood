import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";
import Headline from "../components/Headline";

const StyledIngredients = styled.div`
  color: #5938e0;
`;
function GroceryList({ meals }) {
  return (
    <>
      <Headline size="L">MealPlanner</Headline>
      <StyledIngredients>
        <table>
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Measure</th>
            </tr>
          </thead>
          {meals.map(dish => (
            <tbody>
              <tr>
                <td>
                  {dish.ingredients.map(item => (
                    <li>{item}</li>
                  ))}
                </td>
                <td />
              </tr>
            </tbody>
          ))}
        </table>
      </StyledIngredients>
    </>
  );
}

export default GroceryList;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function IngredientsTable({ dish }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {dish.ingredients.map((elem, index) => (
              <div key={elem + index}>{elem}</div>
            ))}
          </td>
          <td>
            {dish.measure.map((elem, index) => (
              <div key={dish._id + index}>{elem}</div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

IngredientsTable.propTypes = {
  dish: PropTypes.object.isRequired
};
export default IngredientsTable;

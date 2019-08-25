import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.table`
  border-collapse: collapse;
  border: none;
`;

const StyledHead = styled.thead`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const StyledBody = styled.tbody`
  text-align: left;
`;
const StyledRows = styled.tr`
  width: 100px;
`;

const StyledDiv = styled.div`
  &:nth-child(even) {
    background-color: #5938e0;
    opacity: 0.7;
    color: white;
  }
  font-size: 14px;
  margin: 5px 0;
`;

const StyledTd = styled.td`
  text-align: center;
  padding: 10px 0;
`;

function IngredientsTable({ dish }) {
  return (
    <StyledTable>
      <StyledHead>
        <StyledRows>
          <th>Item</th>
          <th>Amount</th>
        </StyledRows>
      </StyledHead>
      <StyledBody>
        <StyledRows>
          <StyledTd>
            {dish.ingredients.map((elem, index) => (
              <StyledDiv key={elem + index}>{elem}</StyledDiv>
            ))}
          </StyledTd>
          <StyledTd>
            {dish.measure.map((elem, index) => (
              <StyledDiv key={dish._id + index}>{elem}</StyledDiv>
            ))}
          </StyledTd>
        </StyledRows>
      </StyledBody>
    </StyledTable>
  );
}

IngredientsTable.propTypes = {
  dish: PropTypes.object.isRequired
};
export default IngredientsTable;

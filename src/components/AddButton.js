import React from "react";
import styled from "styled-components";

const PlusButton = styled.button`
  background-color: transparent;
  border: 2px solid #5938e0;
  border-radius: 180px;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #5938e0;
  margin: 19px;

  &:hover {
    background-color: #5938e0;
    color: white;
  }
`;

function AddButton() {
  return <PlusButton>&#43;</PlusButton>;
}
export default AddButton;

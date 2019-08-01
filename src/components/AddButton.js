import React from "react";
import styled from "styled-components";

const PlusButton = styled.button`
  background-color: transparent;
  border: 2px solid #5938e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  color: #5938e0;
  margin: 19px;

  &:hover {
    background-color: #5938e0;
    color: white;
  }
`;

function AddButton(props) {
  return <PlusButton {...props}>&#43;</PlusButton>;
}
export default AddButton;

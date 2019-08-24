import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PlusButton = styled.button`
  background-color: transparent;
  border: 2px solid #5938e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  color: #5938e0;
  text-align: center;
  padding-bottom: 4px;
  padding-left: 7.5px;

  &:hover {
    background-color: #5938e0;
    color: white;
  }
`;

function AddButton(props) {
  return <PlusButton {...props}>&#43;</PlusButton>;
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default AddButton;

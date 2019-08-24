import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const MinusButton = styled.button`
  background-color: transparent;
  border: 2px solid #5938e0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 25px;
  font-weight: bold;
  color: #5938e0;
  margin: 19px;
  padding-bottom: 4px;

  &:hover {
    background-color: #5938e0;
    color: white;
  }
`;

function DeleteButton(props) {
  return <MinusButton {...props}>&#8722;</MinusButton>;
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default DeleteButton;

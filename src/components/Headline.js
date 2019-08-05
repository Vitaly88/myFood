import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const sizes = {
  S: "18px",
  M: "24px",
  L: "32px"
};

function getSize(size) {
  return sizes[size] || sizes.M;
}
const StyledHeadline = styled.h1`
  margin: 0;
  font-size: ${props => getSize(props.size)};
  font-family: "Arial", "Helvetica", sans-serif;
  color: white;
  /* color: #5938e0; */
`;

function Headline({ size, ...props }) {
  return <StyledHeadline size={size} {...props} />;
}

Headline.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"])
};

Headline.defaultProps = {
  size: "M"
};
export default Headline;

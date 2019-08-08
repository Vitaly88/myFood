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
  font-size: ${props => getSize(props.size)};
  font-family: "Arial", "Helvetica", sans-serif;
  color: white;
  position: fixed;
  margin-top: -40px;
`;

const CenteredHeadline = styled.div`
  display: flex;
  justify-content: center;
  z-index: 2;
`;

function Headline({ size, ...props }) {
  return (
    <CenteredHeadline>
      <StyledHeadline size={size} {...props} />
    </CenteredHeadline>
  );
}

Headline.propTypes = {
  size: PropTypes.oneOf(["S", "M", "L"])
};

Headline.defaultProps = {
  size: "M"
};
export default Headline;

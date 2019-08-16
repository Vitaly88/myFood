import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
  font-size: 35px;
  /* margin-top: -100px; */
`;

function LikeButton({ icon, active, onClick }) {
  return (
    <StyledButton active={active} onClick={onClick}>
      <i className={`far ${icon}`} />
    </StyledButton>
  );
}
LikeButton.propTypes = {
  icon: PropTypes.string.isRequired
};
export default LikeButton;

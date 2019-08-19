import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  color: #5938e0;
  font-size: 30px;
  left: 5px;

  margin-top: -45px;
`;

function LikeButton({ icon, active, onClick, className }) {
  return (
    <StyledButton active={active} onClick={onClick}>
      <i className={`far ${icon}`} />
    </StyledButton>
  );
}
LikeButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};
export default LikeButton;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.div`
  position: absolute;
  color: ${props => (props.active ? "red" : "#5938e0")};
  font-size: 30px;
  left: ${props => props.left || "5px"};
  margin-top: ${props => props.top || "-45px"};
  transition: all 0.4s ease;
`;

function LikeButton({ icon, bookmarked, onClick }) {
  return (
    <StyledButton active={bookmarked} onClick={onClick}>
      <i className={`fas ${icon}`} />
    </StyledButton>
  );
}
LikeButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
export default LikeButton;

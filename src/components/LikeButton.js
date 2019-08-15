import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
  font-size: 35px;
`;
function LikeButton({ icon, active }) {
  return (
    <StyledButton>
      <i className={`far ${icon}`} />
    </StyledButton>
  );
}
LikeButton.propTypes = {
  icon: PropTypes.string.isRequired
};
export default LikeButton;

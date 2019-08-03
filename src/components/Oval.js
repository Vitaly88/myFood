import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const StyledOval = styled.div`
  position: absolute;
  height: 565px;
  top: -400px;
  width: 695px;
  background-color: #5938e0;
  border-radius: 50%;
`;

const CenteredOval = styled.div`
  display: flex;
  justify-content: center;
`;

function Oval() {
  return (
    <CenteredOval>
      <StyledOval />
    </CenteredOval>
  );
}
// Oval.propTypes = {

// }

export default Oval;

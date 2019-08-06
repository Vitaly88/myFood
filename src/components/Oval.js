import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const StyledOval = styled.div`
  position: absolute;
  height: 100px;
  width: 100vw;
  background-color: #5938e0;
  &:before {
    content: "";
    background: #5938e0;
    position: absolute;
    bottom: -47px;
    width: 100%;
    height: 90px;
    border-radius: 50%;
  }
`;

const CenteredOval = styled.div`
  position: relative;
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

import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const StyledOval = styled.div`
  position: absolute;
  height: 595px;
  width: 695px;
  top: -450px;
  background-color: #5938e0;
  border-radius: 50%;
`;

const CenteredOval = styled.div`
  position: fixed;
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

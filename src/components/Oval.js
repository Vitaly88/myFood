import React from "react";
import styled from "styled-components";
//import PropTypes from "prop-types";

const StyledOval = styled.div`
  position: absolute;
  height: 150px;
  width: 100vw;
  background-color: #5938e0;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const CenteredOval = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
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

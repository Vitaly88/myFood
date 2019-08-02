import React from "react";
import styled from "styled-components";

const StyledOval = styled.div`
  position: absolute;
  height: 565px;
  top: -400px;
  width: 185vw;
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

export default Oval;

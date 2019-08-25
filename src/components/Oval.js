import React from "react";
import styled from "styled-components";

const StyledOval = styled.div`
  position: absolute;
  height: 595px;
  width: 695px;
  top: -480px;
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

export default Oval;

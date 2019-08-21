import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100vw;
  margin-top: 130px;
`;

function NotFound() {
  return <StyledImage alt="NotFound" src="/images/404-error.gif" />;
}

export default NotFound;

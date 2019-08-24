import React from "react";
import styled from "styled-components";
import Oval from "../components/Oval";

const ContainerHeader = styled.div`
  top: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <ContainerHeader>
      <Oval />
    </ContainerHeader>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";
import { loader } from "../utils/animations";

const CenteredSpin = styled.div`
  display: flex;
  justify-content: center;
`;

const Spin = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #5938e0;
  width: 40px;
  height: 40px;
  animation: ${loader} 2s linear infinite;
`;

function Loader() {
  return (
    <CenteredSpin>
      <Spin />
    </CenteredSpin>
  );
}

export default Loader;

import React from "react";
import styled from "styled-components";
import { loader } from "../utils/animations";

const CenteredSpin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 240px;
`;

const Spin = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #5938e0;
  width: 100px;
  height: 100px;
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

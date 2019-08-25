import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";

const StyledText = styled.div`
  color: #5938e0;
  margin-left: 50px;
`;

function Settings() {
  return (
    <>
      <Headline size="L">Settings</Headline>
      <StyledText>
        <h4>App Version</h4>
        <div>1.0.4</div>
        <h4>Copyright</h4>
        <div>WebSolutions</div>
      </StyledText>
    </>
  );
}

export default Settings;

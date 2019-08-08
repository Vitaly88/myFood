import React from "react";
import styled from "styled-components";
// import Headline from "../components/Headline";
import PropTypes from "prop-types";
import Oval from "../components/Oval";

const ContainerHeader = styled.div`
  top: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* z-index: 1; */
`;

function Header({ title }) {
  return (
    <ContainerHeader>
      <Oval />
    </ContainerHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;

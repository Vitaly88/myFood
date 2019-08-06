import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import PropTypes from "prop-types";

const StyledHeader = styled(Headline)`
  position: relative;
  color: white;
  text-align: center;
  margin-top: 60px;
`;

function Header({ title }) {
  return <StyledHeader size="L">{title}</StyledHeader>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

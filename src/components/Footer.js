import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFooter = styled.div`
  /* position: fixed; */
  bottom: 0;
  left: 0;
  background-color: #5938e0;
  width: 100vw;
`;

function Footer() {
  return <StyledFooter />;
}

// Footer.propTypes = {
//   title: PropTypes.string
// };

export default Footer;

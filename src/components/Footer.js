import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  bottom: 0;
  left: 0;
  background-color: #5938e0;
  width: 100vw;
`;

const LinkLabel = styled.div`
  font-size: 10px;
  font-weight: 550;
  font-family: "Arial", "Helvetica", sans-serif;
  color: white;
  text-align: center;
  margin: 3px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  justify-content: center;
  display: grid;
  grid-template-rows: 2fr 1fr;
  margin: 3px;
  text-decoration: none;
`;

const StyledIcon = styled.img`
  display: flex;
  margin: auto;
  color: white;

  &:hover & {
    background-color: white;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledLink to="/">
        <StyledIcon alt="Get_Ideas" src="images/Get_Ideas.svg" />
        <LinkLabel>Get Ideas</LinkLabel>
      </StyledLink>

      <StyledLink to="/planner">
        <StyledIcon alt="Meal_Planner" src="images/Calendar.svg" />
        <LinkLabel>Meal Planner</LinkLabel>
      </StyledLink>

      <StyledLink to="/grocery">
        <StyledIcon alt="Grocery_List" src="images/Grocery_List.svg" />
        <LinkLabel>Grocery List</LinkLabel>
      </StyledLink>

      <StyledLink to="/favorites">
        <StyledIcon alt="Favorites" src="images/Heart.svg" />
        <LinkLabel>Favorites</LinkLabel>
      </StyledLink>

      <StyledLink to="/settings">
        <StyledIcon alt="Settings" src="images/Settings.svg" />
        <LinkLabel>Settings</LinkLabel>
      </StyledLink>
    </StyledFooter>
  );
}

export default Footer;

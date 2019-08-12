import React from "react";
import PropTypes from "prop-types";
import { searchFood } from "../utils/mealApi";
import styled from "styled-components";

const RecipeInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Arial", "Helvetica", sans-serif;
  padding-left: 70px;
  border: none;
`;

const Form = styled.form`
  margin-top: -130px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 25px;
  top: 26px;
  height: 40px;
  opacity: 0.8;
`;

const InputContainer = styled.div`
  position: fixed;
  width: 100%;
  padding: 15px;
`;

function Search({ onFoodInput }) {
  const [searchValue, setSearchValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("handleSubmit", searchValue);

    searchFood(searchValue).then(dishes => {
      onFoodInput(dishes);
    });
  }

  function handleChange(event) {
    const lowerCaseValue = event.target.value.toLowerCase();
    setSearchValue(lowerCaseValue);
    //console.log("handleChange", lowerCaseValue);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <SearchIcon src="images/noun_Search_743838.png" />
        <RecipeInput
          onChange={handleChange}
          value={searchValue}
          placeholder="Any ideas for your meal?"
        />
      </InputContainer>
    </Form>
  );
}

Search.propTypes = {
  onFoodInput: PropTypes.func.isRequired
};

export default Search;

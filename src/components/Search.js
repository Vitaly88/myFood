import React from "react";
import PropTypes from "prop-types";
import { searchFood } from "../utils/edamam";
import styled from "styled-components";

const RecepeInput = styled.input`
  width: 350px;
  height: 60px;
  border-radius: 10px;
  margin: 45px auto;
  font-size: 15px;
  font-family: sans-serif;
  text-align: center;
`;

function Search({ onFoodInput }) {
  const [searchValue, setSearchValue] = React.useState("");
  //const [searchHits, setSearchHits] = React.useState("");

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
    <form onSubmit={handleSubmit}>
      <RecepeInput
        onChange={handleChange}
        value={searchValue}
        placeholder="Any ideas for your meal?"
      />
    </form>
  );
}

Search.propTypes = {
  onFoodInput: PropTypes.func.isRequired
};

export default Search;

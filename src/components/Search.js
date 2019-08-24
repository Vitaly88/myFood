import React from "react";
import PropTypes from "prop-types";
import { searchFood } from "../utils/mealApi";
import styled from "styled-components";
import { fadeOut } from "../utils/animations";

const Modal = styled.button`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 17px;
  font-weight: bold;
  background-color: #a11035;
  border-radius: 10px;
  border: none;
  width: 100vw;
  height: 60px;
  top: 25px;
  z-index: 1;
  animation: ${fadeOut} 5s 1 both;
  position: fixed;
`;

const RecipeInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  font-size: 15px;
  font-family: "Arial", "Helvetica", sans-serif;
  padding-left: 70px;
  border: none;
  outline: none;
`;

const Form = styled.form`
  margin-top: -135px;
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
  const [loading, setLoading] = React.useState(true);

  // const controller = new AbortController();
  const clearState = () => {
    setSearchValue("");
  };

  function handleSubmit(event) {
    event.preventDefault();

    searchFood(searchValue)
      .then(dishes => {
        onFoodInput(dishes);
      })
      .then(() => setLoading(false))

      .catch(error => {
        console.error(error);
        setLoading(false);
      })
      .then(clearState());
    // .then(controller.abort());
  }

  function handleChange(event) {
    const lowerCaseValue = event.target.value.toLowerCase();
    setSearchValue(lowerCaseValue);
  }

  return (
    <>
      {!loading && !searchValue && (
        <Modal>Sorry, I can't find anything. Please try again...</Modal>
      )}
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <SearchIcon src="images/noun_Search_743838.png" />
          <RecipeInput
            type="text"
            onChange={handleChange}
            value={searchValue}
            placeholder="Any ideas for your meal?"
          />
        </InputContainer>
      </Form>
    </>
  );
}

Search.propTypes = {
  onFoodInput: PropTypes.func.isRequired
};

export default Search;

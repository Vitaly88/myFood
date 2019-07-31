import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Suggestions from "./components/Suggestions";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
  }
`;

function App() {
  const [dishes, setDishes] = React.useState([]);

  function handleDishChange(newDishes) {
    setDishes(newDishes);
  }

  return (
    <div>
      <GlobalStyle />
      <Search onFoodInput={handleDishChange} />
      <Results dishes={dishes} />
      <Suggestions />
    </div>
  );
}

export default App;

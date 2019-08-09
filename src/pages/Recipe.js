import React from "react";
//import styled from "styled-components";
import Headline from "../components/Headline";

function Recipe({ dishes, mealId, name, imageSrc, diet, recipe, ingredients }) {
  return (
    <>
      <Headline size="L">{name}</Headline>
      {/* {dishes.map(dish => (
        <div key="mealId">
          <Headline>{dish.name}</Headline>
          <img alt={dish.name} src={dish.imageSrc} />
          <h2>Ingredients</h2>
          <div>{dish.ingredients}</div>
          <h2>Preparation</h2>
          <div>{dish.preparation}</div>
        </div>
      ))} */}
    </>
  );
}

export default Recipe;

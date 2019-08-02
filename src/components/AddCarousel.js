import React from "react";
//import styled from "styled-components";
import Carousel from "nuka-carousel";
import { searchFood } from "../utils/edamam";

function AddCarousel({ dishes }) {
  console.log(searchFood(dishes));
  return (
    <Carousel>
      <img alt={dishes.name} src={dishes.imageSrc} key={dishes.name} />
      <h2>{dishes.name}</h2>
    </Carousel>
  );
}

export default AddCarousel;

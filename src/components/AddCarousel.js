import React from "react";
//import styled from "styled-components";
import Carousel from "nuka-carousel";
import { searchFood } from "../utils/edamam";
import PropTypes from "prop-types";

function AddCarousel({ dishes }) {
  // React.useEffect(
  //   dishes => {
  //     console.log(searchFood(dishes));
  //   },
  //   [dishes]
  // );

  searchFood(dishes.imageSrc);

  return (
    <Carousel>
      <img alt={dishes.name} src={dishes.imageSrc} key={dishes.name} />
      <h2>{dishes.name}</h2>
    </Carousel>
  );
}

AddCarousel.propTypes = {
  dishes: PropTypes.array.isRequired
};
export default AddCarousel;

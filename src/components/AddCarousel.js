import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledImage = styled.img`
  margin-top: 140px;
  border-radius: 20px;
  width: 240px;
  box-shadow: 15px 5px 15px grey;
`;
const CenteredContent = styled.div`
  margin: 15px;
  position: relative;
`;

const StyledText = styled.div`
  color: #5938e0;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  margin-top: -40px;
  margin-left: 150px;
`;

function AddCarousel({ dishes }) {
  return (
    <Slider
      slidesToShow={1}
      className="center"
      centerMode={true}
      infinite={true}
      centerPadding={"50px"}
      autoplay={true}
      autoplaySpeed={5000}
      arrows={false}
      speed={2000}
      pauseOnHover={true}
    >
      {dishes.map(dish => (
        <CenteredContent key={dish.mealId}>
          <StyledImage alt={dish.name} src={dish.imageSrc} />
          <StyledText>{dish.name}</StyledText>
        </CenteredContent>
      ))}
    </Slider>
  );
}

AddCarousel.propTypes = {
  dishes: PropTypes.array.isRequired
};
export default AddCarousel;

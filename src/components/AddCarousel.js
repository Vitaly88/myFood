import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledImage = styled.img`
  margin-top: 140px;
  border-radius: 20px;
  width: 220px;
  box-shadow: 15px 5px 15px grey;
  filter: contrast(1.3);
  filter: brightness(1.1);
`;
const CenteredContent = styled.div`
  margin: 10px;
  position: relative;
`;

const StyledText = styled.div`
  color: #5938e0;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  margin-top: -40px;
  margin-left: 120px;
`;

function AddCarousel({ dishes }) {
  return (
    <Slider
      slidesToShow={1}
      className="center"
      centerMode={true}
      infinite={true}
      centerPadding={"60px"}
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

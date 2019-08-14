import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { truncate } from "../utils/truncate";

const StyledImage = styled.img`
  margin-top: 0;
  border-radius: 20px;
  width: 140px;
  height: 140px;
  box-shadow: 15px 5px 15px grey;
  filter: contrast(1.3);
  filter: brightness(1.1);
`;
const CenteredContent = styled.div`
  margin: 5px 10px 30px 20px;
  position: relative;
`;

const StyledText = styled.div`
  color: #5938e0;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  margin: 5px;
`;

function Suggestions({ dishes, history }) {
  function handlePictureLink(dish) {
    history.push(`recipe/${dish.mealId}`);
  }

  return (
    <Slider
      slidesToShow={2}
      slidesToScroll={2}
      infinite={true}
      leftMode={true}
      autoplay={false}
      arrows={false}
    >
      {dishes.map(dish => (
        <CenteredContent
          onClick={() => handlePictureLink(dish)}
          key={dish.mealId}
        >
          <StyledImage alt={dish.name} src={dish.imageSrc} />
          <StyledText>{truncate(dish.name, 2)}</StyledText>
        </CenteredContent>
      ))}
    </Slider>
  );
}

Suggestions.propTypes = {
  dishes: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};
export default withRouter(Suggestions);

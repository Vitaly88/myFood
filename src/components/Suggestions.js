import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { truncate } from "../utils/truncate";

/* LikeButton will be added with a new release of the app. Don't delete the event handler and the like-component */

//import LikeButton from "./LikeButton";

const StyledImage = styled.img`
  margin-top: -5px;
  border-radius: 20px;
  width: 140px;
  height: 140px;
  box-shadow: 15px 5px 15px grey;
  filter: contrast(1.3);
  filter: brightness(1.1);
`;
const CenteredContent = styled.div`
  margin: 5px 5px 30px 23px;
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

function Suggestions({ dishes, history, onFavSelect }) {
  function handlePictureLink(dish) {
    history.push(`recipe/${dish.mealId}`);
  }

  // function handleAddFavorite(dish) {
  //   const newFav = {
  //     _id: dish._id,
  //     mealId: dish.mealId,
  //     title: dish.name,
  //     image: dish.imageSrc
  //   };

  //   onFavSelect(newFav);
  // }

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    leftMode:true,
    infinite:true,
    arrows:false,
    speed:2000,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          centerPadding:"60px",
          className: "center",
          centerMode:true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:false,
          leftMode:true
        }
      }
    ]
  }

  return (
    <Slider
      {...settings}
    >
      {dishes.map(dish => (
        <CenteredContent key={dish._id}>
          <StyledImage
            onClick={() => handlePictureLink(dish)}
            alt={dish.name}
            src={dish.imageSrc}
          />
          {/* <LikeButton icon="fa-heart" onClick={() => handleAddFavorite(dish)} /> */}
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

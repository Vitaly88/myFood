import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { truncate } from "../utils/truncate";
//import LikeButton from "../components/LikeButton";

const StyledImage = styled.img`
  margin-top: 120px;
  border-radius: 20px;
  width: 220px;
  box-shadow: 15px 5px 15px grey;
  filter: contrast(1.3);
  filter: brightness(1.1);
`;
const CenteredContent = styled.div`
  margin: 15px;
  position: relative;
`;

const StyledText = styled.button`
  color: white;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 15px;
  position: absolute;
  margin-top: -40px;
  margin-left: 20px;
  border-radius: 7px;
  background-color: #5938e0;
  height: 25px;
  border: none;
`;

function AddCarousel({ dishes, history, onFavSelect }) {
  // const [showLike, setShowLike] = React.useState(false);

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

  // function handleToggle(dish) {
  //   const filteredDishes = dishes.findIndex(item => item._id === dish._id);

  //   console.log(filteredDishes);
  // }

  return (
    <Slider
      slidesToShow={1}
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
        <CenteredContent key={dish._id}>
          <StyledImage
            onClick={() => handlePictureLink(dish)}
            alt={dish.name}
            src={dish.imageSrc}
          />
          <StyledText>{truncate(dish.name, 2)}</StyledText>

          {/* <LikeButton
            showLike={showLike}
            icon="fa-heart"
            onClick={() => handleToggle(dish)}
            // onClick={() => handleAddFavorite(dish._id)}
            active={showLike}
          /> */}
        </CenteredContent>
      ))}
    </Slider>
  );
}

AddCarousel.propTypes = {
  dishes: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  onFavSelect: PropTypes.func.isRequired
};
export default withRouter(AddCarousel);

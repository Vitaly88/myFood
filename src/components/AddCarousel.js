import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import { truncate } from "../utils/truncate";
import LikeButton from "../components/LikeButton";
//import Results from "../components/Results";

const StyledImage = styled.img`
  margin-top: 150px;
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

const StyledLike = styled(LikeButton)``;

const StyledText = styled.button`
  color: white;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 15px;
  position: absolute;
  margin-top: -40px;
  margin-left: 55px;
  border-radius: 7px;
  background-color: #5938e0;
  height: 25px;
  border: none;
`;

function AddCarousel({ dishes, history, onFavSelect }) {
  //const [showBookmarked, setShowBookmarked] = React.useState(false);
  function handlePictureLink(dish) {
    history.push(`recipe/${dish.mealId}`);
  }

  function handleAddFavorite(dish) {
    const newFav = {
      mealId: dish.mealId,
      title: dish.name,
      image: dish.imageSrc
    };
    onFavSelect(newFav);
  }

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
        <div key={dish.mealId}>
          <CenteredContent>
            <StyledImage
              onClick={() => handlePictureLink(dish)}
              alt={dish.name}
              src={dish.imageSrc}
            />
            <StyledText>{truncate(dish.name, 2)}</StyledText>
            <StyledLike
              icon="fa-heart"
              onClick={() => handleAddFavorite(dish)}
              // active={bookmarked}
              // onClick={onBookmark}
            />
          </CenteredContent>
        </div>
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

import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import { getMeal } from "../utils/mealApi";
import { truncate } from "../utils/truncate";
import LikeButton from "../components/LikeButton";
import Loader from "../components/Loader";
import PropTypes from "prop-types";
//import { getFavoritesFromStorage } from "../utils/storage";
import AddButton from "../components/AddButton";
import PopUpDatePicker from "../components/PopUpDatePicker";
import IngredientsTable from "../components/IngredientsTable";

const ImageContainer = styled.div`
  position: relative;
  left: -100px;
`;

const StyledAddButton = styled(AddButton)`
  margin-top: 20px;
`;

const StyledImage = styled.img`
  width: 220px;
  border-radius: 20px;
  box-shadow: 15px 15px 30px grey;
`;
const StyledContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  color: #5938e0;
`;

const StyledText = styled.div`
  text-indent: 30px;
  line-height: 1.5;
  text-justify: auto;
  text-align: justify;
`;

const StyledHeadlines = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

function Recipe({ match, onFavSelect, onMealSelect, history }) {
  const [meal, setMeal] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [selectedDish, setSelectedDish] = React.useState(null);
  //const [bookmark, setBookmark] = React.useState(getFavoritesFromStorage());

  React.useEffect(() => {
    getMeal(match.params.id)
      .then(result => {
        setMeal(result);
      })
      .then(() => setLoading(false))
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [match.params.id]);

  function handleFavChoice(id) {
    const newFav = {
      _id: meal._id,
      mealId: meal.mealId,
      title: meal.name,
      image: meal.imageSrc,
      bookmarked: !meal.bookmarked
    };
    onFavSelect(newFav);

    setMeal({
      ...meal,
      bookmarked: !meal.bookmarked
    });

    // const index = bookmark.filter(item => item.mealId === id.mealId);

    // console.log(index);
  }
  //console.log(bookmark);

  // React.useEffect(() => {
  //   console.log(getFavoritesFromStorage().then(res => res.json()));

  //   // if (index === -1) {
  //   //   setFavorites([...favorites, favorite]);
  //   // } else {
  //   //   return favorites;
  //   // }
  // }, []);
  function handleSelectDish(meal) {
    setSelectedDish(meal);
  }
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  function handleTimeSelect(result) {
    const newMeal = {
      _id: selectedDish._id,
      mealId: selectedDish.mealId,
      mealType: result.mealType,
      date: result.day.toLocaleDateString("en-US", options),
      title: selectedDish.name,
      image: selectedDish.imageSrc,
      ingredients: selectedDish.ingredients,
      measure: selectedDish.measure
    };
    onMealSelect(newMeal);
    history.push("/planner");
  }

  if (selectedDish) {
    return (
      <div>
        <Headline size="L">{truncate(meal.name, 2)}</Headline>
        {!loading && !meal && <div>Sorry, something has gone wrong!</div>}
        {!loading && meal && (
          <>
            <Headline size="L">{truncate(meal.name, 2)}</Headline>
            <StyledContent>
              <StyledImage alt={meal.name} src={meal.imageSrc} />
              <ImageContainer>
                <LikeButton
                  bookmarked={meal.bookmarked}
                  icon="fa-heart"
                  onClick={handleFavChoice}
                />
              </ImageContainer>
              <StyledAddButton onClick={() => handleSelectDish(meal)} />
              <StyledHeadlines>Ingredients</StyledHeadlines>
              <IngredientsTable dish={meal} />
              <StyledHeadlines>Preparation</StyledHeadlines>
              <StyledText>{meal.recipe}</StyledText>
            </StyledContent>
          </>
        )}
        {loading && <Loader />}
        {selectedDish && <PopUpDatePicker onTimeSelect={handleTimeSelect} />}
      </div>
    );
  }

  return (
    <>
      {!loading && !meal && <div>Sorry, something has gone wrong!</div>}
      {!loading && meal && (
        <>
          <Headline size="L">{truncate(meal.name, 2)}</Headline>
          <StyledContent>
            <StyledImage alt={meal.name} src={meal.imageSrc} />
            <ImageContainer>
              <LikeButton
                bookmarked={meal.bookmarked}
                icon="fa-heart"
                onClick={handleFavChoice}
              />
            </ImageContainer>
            <StyledAddButton onClick={() => handleSelectDish(meal)} />
            <StyledHeadlines>Ingredients</StyledHeadlines>
            <IngredientsTable dish={meal} />
            <StyledHeadlines>Preparation</StyledHeadlines>
            <StyledText>{meal.recipe}</StyledText>
          </StyledContent>
        </>
      )}
      {loading && <Loader />}
    </>
  );
}

Recipe.propTypes = {
  match: PropTypes.object.isRequired,
  onFavSelect: PropTypes.func.isRequired
};

export default Recipe;

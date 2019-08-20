import React from "react";
import styled from "styled-components";
import Headline from "../components/Headline";
import { getMeal } from "../utils/mealApi";
import { truncate } from "../utils/truncate";
import LikeButton from "../components/LikeButton";

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
const StyledLike = styled(LikeButton)`
  position: absolute;
`;

const StyledHeadlines = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

function Recipe({ match, onFavSelect }) {
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    getMeal(match.params.id).then(result => {
      setMeal(result);
    });
  }, [match.params.id]);

  if (!meal) {
    return null;
  }

  function handleFavChoice() {
    const newFav = {
      mealId: meal.mealId,
      title: meal.name,
      image: meal.imageSrc
    };
    onFavSelect(newFav);
  }
  return (
    <>
      <Headline size="L">{truncate(meal.name, 2)}</Headline>
      <StyledContent key={meal.mealId}>
        <StyledImage alt={meal.name} src={meal.imageSrc} />
        <StyledLike icon="fa-heart" onClick={handleFavChoice} />
        <StyledHeadlines>Ingredients</StyledHeadlines>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {meal.ingredients.map((elem, index) => (
                  <div key={elem + index}>{elem}</div>
                ))}
              </td>
              <td>
                {meal.measure.map((elem, index) => (
                  <div key={elem + index}>{elem}</div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <StyledHeadlines>Preparation</StyledHeadlines>
        <StyledText>{meal.recipe}</StyledText>
      </StyledContent>
    </>
  );
}

export default Recipe;

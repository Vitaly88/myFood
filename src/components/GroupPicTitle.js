import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AddButton from "../components/AddButton";
import DeleteButton from "../components/DeleteButton";

const IconImage = styled.img`
  width: 110px;
  height: 110px;
  box-shadow: 15px 15px 30px grey;
  border-radius: 20px;
  margin: 20px;
  filter: contrast(110%);
  filter: brightness(110%);
`;

const TextDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #5938e0;
  align-items: left;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;

const BoxItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: left;
  align-items: center;
`;

// const DietTag = styled.button`
//   padding: 5px 3px;
//   background-color: #5938e0;
//   color: white;
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 10px;
//   font-weight: bold;
//   border-radius: 20px;
// `

function GroupPicTitle({
  name,
  imageSrc,
  onSelectDish,
  onDeleteDish,
  mealId,
  ingredients,
  meals,
  history
}) {
  function handlePictureLink() {
    console.log(mealId);
    //history.push(`recipe/${dish.mealId}`);
  }
  return (
    <div>
      <BoxItems key={mealId}>
        <IconImage
          alt={name}
          src={imageSrc}
          onClick={() => handlePictureLink()}
        />
        <TextDescription>
          {name}
          {ingredients}
          {/* {dishes.map(dish => (
              <DietTag>{dish.diet}</DietTag>
            ))} */}
        </TextDescription>
        {onSelectDish && <AddButton onClick={() => onSelectDish()} />}
        {onDeleteDish && <DeleteButton onClick={() => onDeleteDish()} />}
      </BoxItems>
    </div>
  );
}

GroupPicTitle.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
  //onSelectDish: PropTypes.func.isRequired
};
export default GroupPicTitle;

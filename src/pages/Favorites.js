import React from "react";
import PropTypes from "prop-types";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";

function Favorites({ favorites, onMealDelete }) {
  return (
    <>
      <Headline size="L">Favorites</Headline>
      <div>
        {favorites
          .map(favorite => (
            <div key={favorite._id}>
              <GroupPicTitle
                mealId={favorite.mealId}
                dish={favorite}
                name={favorite.title}
                imageSrc={favorite.image}
                onDeleteDish={() => onMealDelete(favorite._id)}
              />
            </div>
          ))
          .slice(0, 20)}
      </div>
    </>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array.isRequired,
  onMealDelete: PropTypes.func.isRequired
};

export default Favorites;

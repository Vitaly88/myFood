import React from "react";
//import styled from "styled-components";
//import PropTypes from "prop-types";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";

function Favorites({ favorites, dish }) {
  return (
    <>
      <Headline size="L">Favorites</Headline>
      <div>
        {favorites
          .map(favorite => (
            <>
              <GroupPicTitle
                key={favorite.mealId}
                dish={dish}
                name={favorite.title}
                imageSrc={favorite.image}
                // onDeleteDish={() => setDeleteItem()}
              />
            </>
          ))
          .slice(0, 10)}
      </div>
    </>
  );
}

export default Favorites;

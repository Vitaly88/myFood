import React from "react";
//import styled from "styled-components";
//import PropTypes from "prop-types";
import Headline from "../components/Headline";
import GroupPicTitle from "../components/GroupPicTitle";
//import { withRouter } from "react-router-dom";

function Favorites({ favorites, dish }) {
  return (
    <>
      <Headline size="L">Favorites</Headline>
      <div>
        {favorites
          .map(favorite => (
            <>
              <GroupPicTitle
                mealId={favorite.mealId}
                dish={favorite}
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

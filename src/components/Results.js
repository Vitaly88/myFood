import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  flex-direction: column;
  flex-wrap: wrap;
  color: #5938e0;
  align-items: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: bold;
  margin: 5px;
`;

const BoxFoundItems = styled.div`
  display: flex;
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
// `;

function Results({ dishes }) {
  if (dishes.length === 0) {
    return <div>Sorry, I can't find anything.</div>;
  }

  return (
    <div>
      {dishes.map(dish => (
        <BoxFoundItems key={dish.name}>
          <IconImage alt={dish.name} src={dish.imageSrc} />
          <TextDescription>
            {dish.name}
            {/* {dishes.map(dish => (
              <DietTag>{dish.diet}</DietTag>
            ))} */}
          </TextDescription>
        </BoxFoundItems>
      ))}
    </div>
  );
}

Results.propTypes = {
  dishes: PropTypes.array.isRequired
};

export default Results;

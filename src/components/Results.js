import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconImage = styled.img`
  width: 110px;
  height: 110px;
  box-shadow: 15px 15px 30px grey;
  border-radius: 20px;
  margin: 20px;
`;

const TextDescription = styled.div`
  color: #5938e0;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: bold;
`;

const BoxFoundItems = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;
function Results({ dishes }) {
  if (dishes.length === 0) {
    return <div>Sorry, I can't find anything.</div>;
  }

  return (
    <div>
      <ul>
        {dishes.map(dish => (
          <BoxFoundItems key={dish.name}>
            <IconImage alt={dish.name} src={dish.imageSrc} />
            <TextDescription>{dish.name}</TextDescription>
          </BoxFoundItems>
        ))}
      </ul>
    </div>
  );
}

Results.propTypes = {
  dishes: PropTypes.array.isRequired
};

export default Results;

import React from 'react';

export interface CardProps {
  card: boolean;
  handleClick: (number: number) => void;
}

const Card: React.SFC<CardProps> = ({ card, handleClick }) => {
  const number = 1;

  return (
    <>
      {card ? (
        <div className="card card__number">{number}</div>
      ) : (
        <>
          <div className="card" onClick={() => handleClick(number)} />
        </>
      )}
    </>
  );
};

export default Card;

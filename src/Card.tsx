import React from 'react';

export interface CardProps {
  card: { id: number; value: string; hidden: boolean; matched: boolean };
  handleClick: (number: number) => void;
}

const Card: React.SFC<CardProps> = ({ card, handleClick }) => {
  return (
    <>
      {card.hidden ? (
        <div className={`card ${card.matched ? 'matched' : ''}`} onClick={() => handleClick(card.id)} />
      ) : (
        <div className="card card__number">{card.value}</div>
      )}
    </>
  );
};

export default Card;

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

import './App.css';
import Card from './Card';

interface CardType {
  id: number;
  value: string;
  hidden: boolean;
  matched: boolean;
}

export interface CardsProps {
  choice: number;
  setChoice: Dispatch<SetStateAction<number>>;
}

const Cards: React.SFC<CardsProps> = ({ choice, setChoice }) => {
  const [cards, setCards] = useState();

  // add random item to cards state
  useEffect(() => {
    let array: CardType[] = [];
    // add random item too array
    for (let i = 0; i < (choice * choice) / 2; i++) {
      array[i] = { id: 0, value: (Math.random() * 100).toFixed(), hidden: true, matched: false };
    }
    // duplicate item in array
    array = [...array, ...array];
    // unique id
    array = array.map((item: CardType, index: number) => {
      const itemm = { ...item };
      itemm.id = index;
      return itemm;
    });
    // mix array
    array.sort(() => Math.random() - 0.5);
    setCards(array);
  }, []);

  // logic matched and hidde card
  useEffect(() => {
    const visible = cards?.filter((card: CardType) => card.hidden === false);

    if (visible && visible.length === 2) {
      if (visible[0].value === visible[1].value) {
        setTimeout(() => {
          setCards((prev: CardType[]) =>
            prev.map((card: CardType) =>
              card.value === visible[0].value ? { ...card, hidden: true, matched: true } : card,
            ),
          );
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev: CardType[]) => prev.map((card: CardType) => ({ ...card, hidden: true })));
        }, 500);
      }
    }
  }, [cards]);

  const [counter, setcCunter] = useState(0);

  // visible card and count

  const handleClick = (id: number) => {
    setcCunter(prev => prev + 1);
    if (cards?.filter((card: CardType) => card.hidden === false).length < 2) {
      setCards((prev: CardType[]) =>
        prev.map((card: CardType) => (card.id === id ? { ...card, hidden: false } : card)),
      );
    }
  };

  return (
    <>
      {cards?.filter((card: CardType) => card.matched === false).length !== 0 ? (
        <div
          className="cards"
          style={{ gridTemplateColumns: `repeat(${choice}, 100px)`, gridTemplateRows: `repeat(${choice}, 100px)` }}
        >
          {cards?.map((card: CardType) => (
            <Card card={card} handleClick={handleClick} key={card.id} />
          ))}
        </div>
      ) : (
        <div className="score">
          Your score:
          <strong>{(counter / (choice * choice)).toFixed(3)}</strong>
          <button type="button" className="btn" onClick={() => setChoice(0)}>
            Restart
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;

import React, { useState, useEffect } from 'react';

import './App.css';
import Card from './Card';

interface CardType {
  id: number;
  value: string;
  hidden: boolean;
  metch: boolean;
}

function App() {
  const [cards, setCards] = useState();

  useEffect(() => {
    let array: CardType[] = [];
    // add random item too array
    for (let i = 0; i < 8; i++) {
      array[i] = { id: 0, value: (Math.random() * 100).toFixed(), hidden: true, metch: false };
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

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const handleClick = (id: number) => {
    setCards((prev: CardType[]) => prev.map((card: CardType) => (card.id === id ? { ...card, hidden: false } : card)));
  };

  const [input, setInput] = useState(1);
  const handleClickHide = () => {
    setCards((prev: CardType[]) =>
      prev.map((card: CardType, index: number) => (index === input - 1 ? { ...card, hidden: true } : card)),
    );
  };

  return (
    <div className="App">
      <input type="number" value={input} onChange={e => setInput(+e.target.value)} />
      <button type="button" onClick={() => handleClickHide()}>
        hidden
      </button>
      <div className="cards">
        {cards?.map((card: CardType) => (
          <Card card={card} handleClick={handleClick} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

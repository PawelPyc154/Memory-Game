import React, { useState } from 'react';

import './App.css';
import Card from './Card';

function App() {
  const [card, setCard] = useState(false);

  const handleClick = (number: number) => {
    setCard(() => true);

    setTimeout(() => {
      alert(number);
    }, 100);
  };

  return (
    <div className="App">
      <button type="button" onClick={() => setCard(false)}>
        hidden
      </button>

      <Card card={card} handleClick={handleClick} />
    </div>
  );
}

export default App;

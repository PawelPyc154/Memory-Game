import React, { useState } from 'react';
import Choice from './Choice';
import Cards from './Cards';

function App() {
  const [choice, setChoice] = useState(0);

  return (
    <div className="App">
      {choice === 0 ? <Choice setChoice={setChoice} /> : <Cards choice={choice} setChoice={setChoice} />}
    </div>
  );
}

export default App;

import React, { Dispatch, SetStateAction } from 'react';
import './Choice.css';

export interface ChoiceProps {
  setChoice: Dispatch<SetStateAction<number>>;
}

const Choice: React.SFC<ChoiceProps> = ({ setChoice }) => {
  return (
    <>
      <div className="choice">
        <button className="choice__btn choice__btn--easy" type="button" onClick={() => setChoice(4)}>
          Easy
        </button>
        <button className="choice__btn choice__btn--middle" type="button" onClick={() => setChoice(6)}>
          Middle
        </button>
        <button className="choice__btn choice__btn--hard" type="button" onClick={() => setChoice(8)}>
          Hard
        </button>
      </div>
    </>
  );
};

export default Choice;

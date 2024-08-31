
import React from "react";
import {nanoid} from "nanoid";
import ButtonInitial from './ButtonInitial';
import ButtonFinal from './ButtonFinal';

function Box({ id, question, choices, result, onClick }) {
    const ButtonsInitial = choices.map(item => 
      <ButtonInitial 
        key={nanoid()} 
        id={id} 
        choice={item.choice} 
        isCorrect={item.isCorrect} 
        itemID={item.id} 
        isActive={item.isActive} 
        onClick={onClick} 
      />
    )
  
    const ButtonsFinal = choices.map(item => 
      <ButtonFinal 
        key={nanoid()} 
        choice={item.choice} 
        isCorrect={item.isCorrect} 
        isActive={item.isActive} 
      />
    )
  
    return (
      <div>
        <p>{question}</p>
        {result ? ButtonsFinal : ButtonsInitial}
        <hr />
      </div>
    );
}

export default Box;

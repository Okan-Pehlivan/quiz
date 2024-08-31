
import React from "react";
import {nanoid} from "nanoid";
import Box from './Box';

function Quiz({ quizData, answers, result, keepAnswers, getResult, getForm }) {
    const boxItems = quizData.map(item => 
        <Box 
          key={nanoid()} 
          id={item.id} 
          question={item.question} 
          choices={item.choices} 
          result={result}
          onClick={keepAnswers} 
        />
    )

    const score = answers.map(item => item.isCorrect ? 1 : 0).reduce((sum, a) => sum + a, 0)

    return (
        <div className="Quiz">
        {boxItems}
        {result && <p>Your score is: {score}/{answers.length}</p>}
        {result ?
          <button className="Button" onClick={getForm}>New Quiz</button> :
          <button className="Button" onClick={getResult}>Submit</button>
        }
        </div>
    )
}

export default Quiz;

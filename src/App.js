
import React, { useEffect, useState } from "react";
import Form from './Form';
import Quiz from './Quiz';
//import { newAnswers5, newAnswers10 } from './newAnswers.json';
//import { newAnswers5, newAnswers10 } from './answersTemplate';

let newAnswers5 = [
  {id: 1, choice: "", isCorrect: false},
  {id: 2, choice: "", isCorrect: false},
  {id: 3, choice: "", isCorrect: false},
  {id: 4, choice: "", isCorrect: false},
  {id: 5, choice: "", isCorrect: false}
];

let newAnswers10 = [
  {id: 1, choice: "", isCorrect: false},
  {id: 2, choice: "", isCorrect: false},
  {id: 3, choice: "", isCorrect: false},
  {id: 4, choice: "", isCorrect: false},
  {id: 5, choice: "", isCorrect: false},
  {id: 6, choice: "", isCorrect: false},
  {id: 7, choice: "", isCorrect: false},
  {id: 8, choice: "", isCorrect: false},
  {id: 9, choice: "", isCorrect: false},
  {id: 10, choice: "", isCorrect: false}
];

function App() {
  const [formData, setFormData] = useState({category: "11", amount: "5"})
  const [quizData, setQuizData] = useState([])
  const [answers, setAnswers] = useState([])
  const [quiz, setQuiz] = useState(false)
  const [result, setResult] = useState(false)

  useEffect(() => 
  fetch(`https://opentdb.com/api.php?amount=${formData.amount}&category=${formData.category}&difficulty=easy&type=multiple`)
    .then(response => response.json())
    .then(data => data.results)
    .then(data => data.map((item, index) => 
      (
        {id: index+1,
          question: item.question.replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&amp;/g, "&"), 
          choices: [
            {id: 1, choice: item.correct_answer.replace(/&#039;/g, "'"), isCorrect: true, isActive: false},
            {id: 2, choice: item.incorrect_answers[0].replace(/&#039;/g, "'"), isCorrect: false, isActive: false},
            {id: 3, choice: item.incorrect_answers[1].replace(/&#039;/g, "'"), isCorrect: false, isActive: false},
            {id: 4, choice: item.incorrect_answers[2].replace(/&#039;/g, "'"), isCorrect: false, isActive: false}
          ]
        }
      )
      )
    )
    .then(data => data.map(item => ({...item, choices: item.choices.sort(() => Math.random() - 0.5)})))
    .then(data => setQuizData(data))
  , [quiz, formData])

  function keepAnswers(id, choice, isCorrect, itemID) {
    if(formData.amount === "5") {
      newAnswers5 = newAnswers5.map(item => id === item.id ? {id: id, value: choice, isCorrect: isCorrect} : item)
      setAnswers(() => newAnswers5)
    } else if(formData.amount === "10") {
      newAnswers10 = newAnswers10.map(item => id === item.id ? {id: id, value: choice, isCorrect: isCorrect} : item)
      setAnswers(() => newAnswers10)
    }

    let newQuizData = []
    newQuizData = quizData.map(item => id === item.id ?
      {...item,
        choices: item.choices.map(choice => itemID === choice.id ? {...choice, isActive: true} : {...choice, isActive: false})
      } :
      item
    )
    setQuizData(newQuizData)
  }

  function getOuiz() {
    setQuiz(true)
  }

  function getResult() {
    setResult(true)
  }

  function getForm() {
    setQuiz(false)
    setResult(false)
  }

  function handleFormChange(event) {
    const {name, value} = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  return (
    <div className="App">
    {
      !quiz ? 
      <Form 
        formData={formData} 
        handleFormChange={handleFormChange} 
        getOuiz={getOuiz} 
      /> : 
      <Quiz 
        quizData={quizData} 
        answers={answers} 
        result={result} 
        keepAnswers={keepAnswers} 
        getResult={getResult} 
        getForm={getForm} 
      />
    }
    </div>
  );
}

export default App;

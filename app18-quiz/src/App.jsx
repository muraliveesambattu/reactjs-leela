import { useState } from 'react'
import './App.css';

import { questions } from './Questions';
import { HeadAndTails } from './HeadAndTails';

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0)

  console.log(questions[questionIndex]);

  const handleSubmit = (ans) => {
    setQuestionIndex(questionIndex + 1);
    if (questions[questionIndex].correctAnswer == ans) {
      setScore(score + 1)
    }
  }
  return (
    <>
      {/* {questionIndex < 5 ? <>
        <h1>{questions[questionIndex].question}</h1>
        <ul>
          {questions[questionIndex].options.map((ans, i) => <li key={i} onClick={() => { handleSubmit(ans) }}>{ans}</li>)}
        </ul>
      </> : <>
        <h1>Quiz is Completed !!</h1>
        <h2>Your Score is : {score}</h2>
      </>} */}
  <HeadAndTails/>
    </>
  )
}

export default App

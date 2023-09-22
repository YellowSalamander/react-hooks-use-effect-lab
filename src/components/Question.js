import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() => {
  let timer;

  const startTimer = () => {
    timer = setTimeout (() => {
      if (timeRemaining > 1){
        setTimeRemaining((prevTime) => prevTime - 1);
        startTimer();
      
      }else {
        onAnswered(false)
        setTimeRemaining (10)
      }
    }, 1000)
  };
  startTimer();

  return () => {
    clearTimeout(timer)
  };
}, [timeRemaining, onAnswered])



//   useEffect(() => {
//     const timerInterval = setInterval(() => {
//       if (timeRemaining > 0) {
//         setTimeRemaining((prevTime) => prevTime - 1)
//       } else {
//         clearInterval(timerInterval);
//         setTimeRemaining(10)
//         onAnswered(false)
//       }
//     } , 1000);
//     return () => {
//       clearInterval(timerInterval);
//     };
// }, [timeRemaining, onAnswered]);
  

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

 

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;

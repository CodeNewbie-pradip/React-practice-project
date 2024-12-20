import { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css';

function Quiz() {
  const questions = [{
    question: "What is react ?",
    options: ['css Framerwork', 'React Library', 'React Framework', 'Testing tool'],
    answer: 'React Library'
  }, {
    question: "what is 2+2 ?",
    options: ['3', '4', '6', '8'],
    answer: '4'
  }, {
    question: "odd one out ?",
    options: ['cpp', 'java', 'js', 'vscode'],
    answer: 'vscode'
  }];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(c => c + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(c => c + 1);
    setCurrentAnswer(null);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ?
        <div>
          <QuestionList 
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer} />
          <button 
            className={currentAnswer === null ? 'button-disable' : 'button'} 
            onClick={handleNextQuestion} 
            disabled={currentAnswer === null}>
            Next Question
          </button>
        </div> :
        <div>Your score is: <h2>{score}</h2></div>
      }
    </div>
  );
}

export default Quiz;

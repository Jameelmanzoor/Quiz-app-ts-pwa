import React, { useEffect, useState } from 'react';
import './App.css';
import { QuestionCard } from './components/QuestionCard';
import { getQuizData } from './services/quiz_service';
import { QuizType } from './types/quiz_types';


function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const questionsData = await getQuizData(5, 'easy');
      console.log(questionsData);
      setQuiz(questionsData);
    };
    fetchData();
  }, [])

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(currentStep !== quiz.length-1) {
    setCurrentStep(++currentStep)
    } else {
      alert("Quiz is Completed.");
      setCurrentStep(0);
    }
  }
  if(!quiz.length) {
    return <h3>Loading</h3>
  }
  return (
    <div className="App">
      <QuestionCard 
      question={quiz[currentStep].question}
      options={quiz[currentStep].options}
      callback={submitHandler}/>
    </div>
  );
}


export default App;

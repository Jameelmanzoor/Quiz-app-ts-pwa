import React, { useEffect, useState } from "react";
import "./App.css";
import { QuestionCard } from "./components/QuestionCard";
import { getQuizData } from "./services/quiz_service";
import { QuizType } from "./types/quiz_types";

function App() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questionsData = await getQuizData(5, "easy");
      console.log(questionsData);
      setQuiz(questionsData);
    }
    fetchData();
  }, []);

  const submitHandler = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();

    const currentQuestion = quiz[currentStep];
    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      alert(`You Score is ${score} out of ${quiz.length} Questions`);
      setCurrentStep(0);
      setScore(0);
    }
    console.log(
      `User Ans: ${userAns} and Correct Answer: ${currentQuestion.answer}`
    );
  };
  if (!quiz.length) {
    return <h3>Loading</h3>;
  }
  return (
    <div className="App">
      <QuestionCard
        question={quiz[currentStep].question}
        options={quiz[currentStep].options}
        callback={submitHandler}
      />
    </div>
  );
}

export default App;

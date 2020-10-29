import React, { useEffect, useState } from "react";
import "../App.css";
import { QuestionCard } from "./QuestionCard";
import { getQuizData } from "../services/quiz_service";
import { QuizType } from "../types/quiz_types";
import { useData } from "../context/GlobalContex";

function Quiz() {
  let [quiz, setQuiz] = useState<QuizType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [activeOptiondiv, setActiveOptiondiv] = useState(Infinity);
  let [showResult, setShowResult] = useState(false);
  const { formData, submit, setSubmit } = useData()!;
  let { category, level, count } = formData;

  useEffect(() => {
    async function fetchData() {
      if (submit) {
        const questionsData = await getQuizData(category, level, count);
        // console.log(questionsData);
        setQuiz(questionsData);
      }
    }
    fetchData();
  }, [submit, category, level, count]);
  console.log("Duiz data is: ", quiz);
  const submitHandler = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    setActiveOptiondiv(Infinity);
    const currentQuestion = quiz[currentStep];
    if (userAns === currentQuestion.answer) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      setShowResult(true);
    }
  };
  if (!quiz.length) {
    return <h3>Loading</h3>;
  }

  if (showResult) {
    return (
      <div className="question-container">
        <h2>Final Result</h2>
        <p>
          You Score is <b>{score} </b> out of <b>{quiz.length}</b>
        </p>
        <button onClick={() => setSubmit(false)}>Restart Quiz</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Quiz App</h2>
      <QuestionCard
        question={quiz[currentStep].question}
        options={quiz[currentStep].options}
        callback={submitHandler}
        activeOptiondiv={activeOptiondiv}
        setActiveOptiondiv={setActiveOptiondiv}
        totalQuestions={quiz.length}
        currentQuestionNumber={currentStep}
      />
    </div>
  );
}

export default Quiz;

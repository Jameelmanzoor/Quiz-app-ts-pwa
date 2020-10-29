import React, { useState } from "react";
import { QuestionPropsType } from "../types/quiz_types";

export const QuestionCard: React.FC<QuestionPropsType> = ({
  question,
  options,
  callback,
  activeOptiondiv,
  setActiveOptiondiv,
  totalQuestions,
  currentQuestionNumber,
}) => {
  let [selectedAns, setSelectedAns] = useState("");
  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };
  return (
    <div className="question-container">
      <h3>
        Question {currentQuestionNumber + 1} out of {totalQuestions}{" "}
      </h3>
      <div className="question">
        <h4 dangerouslySetInnerHTML={{ __html: question }} />
        <form
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, selectedAns)
          }
          className="question-form"
        >
          {options.map((option: string, index: number) => {
            return (
              <div
                key={index}
                className={
                  activeOptiondiv === index
                    ? "option-container active"
                    : "option-container"
                }
                onClick={() => setActiveOptiondiv(index)}
              >
                <label className="radio">
                  <input
                    type="radio"
                    name="option"
                    required
                    value={option}
                    checked={selectedAns === option}
                    onChange={handleSelection}
                  />
                  <span dangerouslySetInnerHTML={{ __html: option }} />
                </label>
              </div>
            );
          })}
          {currentQuestionNumber + 1 !== totalQuestions ? (
            <button type="submit" className="submit-btn">
              Next Question
            </button>
          ) : (
            <input type="submit" className="submit-btn" />
          )}
        </form>
      </div>
    </div>
  );
};

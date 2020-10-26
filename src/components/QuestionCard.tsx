import React, { useState } from 'react';
import { QuestionPropsType } from '../types/quiz_types';


export const QuestionCard: React.FC<QuestionPropsType> = ({question, options, callback}) => {
  let [selectedAns, setSelectedAns] = useState("");
  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  }
  return (
    <div className='question-container'>
      <div className='question'>
        <h4>{question}</h4>
        <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
          {options.map((option: string, index: number ) => {
            return(
              <div key={index}>
                <label>
                  <input 
                  type="radio" 
                  name="option"
                  required
                  value={option}
                  checked={selectedAns === option}
                  onChange={handleSelection}/>
                  {option}
                </label>
              </div>
            )})}
          <input type="submit"/>
        </form>
      </div>    
    </div>
    )
}


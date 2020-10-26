import React from 'react';
import { QuestionPropsType } from '../types/quiz_types';


export const QuestionCard: React.FC<QuestionPropsType> = ({question, options, callback}) => {
  return (
    <div className='question-container'>
      <div className='question'>
        <h4>{question}</h4>
        <form onSubmit={callback}>
          {options.map((option: string, index: number ) => {
            return(
              <div key={index}>
                <label>
                  <input 
                  type="radio" 
                  name="option"
                  value={option}/>
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


import React from 'react';

export type QuizQuestionsType = {
  category: string,
  correct_answer: string,
  difficulty: string,
​  incorrect_answers: string[],
​  question: string,
​  type: string
}

export type QuizType = {
  question: string
  answer: string,
  options: string[]
}

export type QuestionPropsType = {
  question: string, 
  options: string[]
  callback: (e: React.FormEvent<EventTarget>, UserAns: string) => void,
  activeOptiondiv: Number,
  setActiveOptiondiv: any,
  totalQuestions: number,
  currentQuestionNumber: number
}

export type CategoriesType = {
  id: number, 
  name: string}
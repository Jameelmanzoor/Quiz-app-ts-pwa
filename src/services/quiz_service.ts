
import {CategoriesType, QuizQuestionsType, QuizType} from '../types/quiz_types';

const shuffleArray = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

export async function getQuizData(catagory?: string, level?: string, count?: string): Promise<QuizType[]> {
  
  const response = await fetch(`https://opentdb.com/api.php?amount=${count}&category=${catagory}&difficulty=${level}&type=multiple`);
  let {results} = await response.json();
  const quiz: QuizType[] = results.map((questionObj: QuizQuestionsType) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
  }})
  return quiz;
}

export async function  getCategories(): Promise<CategoriesType[]> {
  const response = await fetch("https://opentdb.com/api_category.php");
  let data: {trivia_categories: CategoriesType[]} = await response.json();
 const categories = data.trivia_categories
  return categories;
}
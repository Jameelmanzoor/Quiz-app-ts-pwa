import {QuizQuestionsType, QuizType} from '../types/quiz_types'

const shuffleArray = (arr: any[]) => [...arr].sort(() => Math.random() - 0.5);

export async function getQuizData(questionCount: number, difficultyLevel: string ): Promise<QuizType[]> {
  const response = await fetch(`https://opentdb.com/api.php?amount=${questionCount}&category=18&difficulty=${difficultyLevel}&type=multiple`);
  let {results} = await response.json();
  const quiz: QuizType[] = results.map((questionObj: QuizQuestionsType) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      options: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
  }})
  return quiz;
}
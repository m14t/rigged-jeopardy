import { path } from 'ramda';
import { QuestionData } from '../../types';

function validateQuestions(questionData: QuestionData) {
  const categoryLenghts = questionData.map(path(['questions', 'length']));
  const allCategoriesSameLength = categoryLenghts.every(
    (el, i, arr) => el === arr[0],
  );

  if (!allCategoriesSameLength) {
    throw new Error('All categories do not have the same length');
  }
}

export default validateQuestions;

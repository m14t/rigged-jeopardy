import * as React from 'react';
import { questionData } from '../../data';
import validateQuestions from './validate-questions';
import { lensPath, pluck, range, view } from 'ramda';
import Question from '../question';
import { QuestionContainer } from '../../types';

const maxValue = 1000;
const styles = {
  table: {
    position: 'relative' as 'relative',
    color: '#ffffff',
    height: '90vh',
    width: '100%',
  },
  th: {
    textAlign: 'center' as 'center',
    padding: '10px',
  },
};

function GameBoard() {
  validateQuestions(questionData);

  const categories = pluck('category', questionData);
  const questionLength = questionData[0].questions.length;
  const valueIncrement = maxValue / questionLength;

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {categories.map((category) => (
            <th key={category} style={styles.th}>
              {category}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {range(0, questionLength).map((row) => (
          <tr key={row}>
            {questionData
              .map(view(lensPath(['questions', row])))
              .map((question, column) => (
                <td key={`r${row}c${column}`}>
                  <Question
                    question={question as QuestionContainer}
                    value={(row + 1) * valueIncrement}
                  />
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameBoard;

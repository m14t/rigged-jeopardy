import * as React from 'react';
import { questionData } from '../../data';
import validateQuestions from './validate-questions';
import { lensPath, pluck, range, view } from 'ramda';

const maxValue = 1000;
const styles = {
  table: {
    backgroundColor: '#000000',
    color: '#ffffff',
    height: '100%',
    width: '100%',
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
          <td />
          {categories.map((category) => (
            <td key={category}>{category}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {range(0, questionLength).map((row) => (
          <tr key={row}>
            <td>{(row + 1) * valueIncrement}</td>
            {questionData
              .map(view(lensPath(['questions', row])))
              .map((question, column) => (
                <td key={`r${row}c${column}`}>
                  <pre>{JSON.stringify(question, null, 4)}</pre>
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameBoard;

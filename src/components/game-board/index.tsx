import * as React from 'react';
import { questionData } from '../../data';
import validateQuestions from './validate-questions';
import { lensPath, pluck, range, view } from 'ramda';
import Question from '../question';
import { QuestionContainer } from '../../types';

const pointValues = [17, 42, 69];
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

type Props = {
  disabled: boolean;
  onQuestionClose: (points: number) => void;
};

function GameBoard(props: Props) {
  validateQuestions(questionData);

  const categories = pluck('category', questionData);
  const questionLength = questionData[0].questions.length;

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
                    disabled={props.disabled}
                    onClose={props.onQuestionClose}
                    question={question as QuestionContainer}
                    value={pointValues[row]}
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

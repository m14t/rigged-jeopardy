import * as React from 'react';
import { QuestionContainer } from '../types';
import { useState, useCallback } from 'react';

const styles = {
  question: {
    backgroundColor: '#0000ff',
    color: '#ffffff',
    height: '100%',
    width: '100%',
  },
};

type Props = {
  question: QuestionContainer;
  value: number;
};

function Question(props: Props) {
  const [value, setValue] = useState(`$${Math.floor(props.value)}`);
  const onClick = useCallback((event) => {
    setValue(
      event.shiftKey
        ? props.question.hard.question
        : props.question.easy.question,
    );
  }, []);

  return (
    <div onClick={onClick} style={styles.question}>
      {value}
    </div>
  );
}

export default Question;

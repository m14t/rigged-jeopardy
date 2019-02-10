import * as React from 'react';
import { QuestionContainer } from '../types';
import { useState, useCallback } from 'react';

const styles = {
  question: {
    alignItems: 'center',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  selected: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

type Props = {
  question: QuestionContainer;
  value: number;
};

function Question(props: Props) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(`$${Math.floor(props.value)}`);

  const onClick = useCallback((event) => {
    setSelected(true);
    setValue(
      event.shiftKey
        ? props.question.hard.question
        : props.question.easy.question,
    );
  }, []);

  return (
    <div
      onClick={onClick}
      style={
        selected ? { ...styles.question, ...styles.selected } : styles.question
      }
    >
      {value}
    </div>
  );
}

export default Question;

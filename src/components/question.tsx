import * as React from 'react';
import { QuestionContainer } from '../types';
import { useState, useCallback } from 'react';
const { useEffect } = React;

const styles = {
  question: {
    alignItems: 'center',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    display: 'flex',
    fontSize: '10vh',
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
  onClose: (points: number) => void;
  question: QuestionContainer;
  value: number;
};

function Question(props: Props) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(`${Math.floor(props.value)}`);

  const onClick = useCallback(
    (event) => {
      if (value === '') {
        return;
      }
      setSelected(true);
      setValue(
        event.shiftKey
          ? props.question.hard.question
          : props.question.easy.question,
      );
    },
    [selected, value],
  );

  const losingKeys = ['-', '_'];
  const winningKeys = ['=', '+'];
  const targetKeys = [...losingKeys, ...winningKeys];
  function downHandler({ key }: KeyboardEvent) {
    if (selected && targetKeys.includes(key)) {
      setSelected(false);
      setValue('');

      if (losingKeys.includes(key)) {
        props.onClose(-1 * props.value);
      } else {
        props.onClose(props.value);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [props.onClose, selected]);

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

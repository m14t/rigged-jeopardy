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
  disabled: boolean;
  onClose: (points: number) => void;
  question: QuestionContainer;
  value: number;
};

function Question(props: Props) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(`${Math.floor(props.value)}` as any);

  const onClick = useCallback(
    (event) => {
      if (props.disabled || value === '') {
        return;
      }
      setSelected(true);

      const question = event.shiftKey
        ? props.question.hard
        : props.question.easy;

      if (question.text) {
        setValue(question.text);
      } else {
        setValue(
          <div
            style={{
              background: `url(${question.image})`,
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
            }}
          />,
        );
      }
    },
    [props.disabled, selected, value],
  );

  const losingKeys = ['-', '_'];
  const winningKeys = ['=', '+'];
  const targetKeys = [...losingKeys, ...winningKeys];
  function downHandler({ key }: KeyboardEvent) {
    if (selected && targetKeys.includes(key)) {
      setSelected(false);
      setValue('');

      if (losingKeys.includes(key)) {
        new Audio(
          `${process.env.PUBLIC_URL}/mp3s/dont-impress-me-much.mp3`,
        ).play();

        props.onClose(-1 * props.value);
      } else {
        new Audio(`${process.env.PUBLIC_URL}/mp3s/whoomp.mp3`).play();

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

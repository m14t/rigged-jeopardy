import * as React from 'react';
import GameBoard from '../game-board';
import Players from '../players';
import { useCallback, useReducer } from 'react';
import {
  add,
  assoc,
  findIndex,
  lensPath,
  map,
  over,
  pipe,
  propEq,
  set,
} from 'ramda';

const initialState = [
  {
    name: 'Player 1',
    score: 0,
    selected: false,
  },
  {
    name: 'Player 2',
    score: 0,
    selected: false,
  },
  {
    name: 'Player 3',
    score: 0,
    selected: false,
  },
];

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'updateScore': {
      const index = findIndex(propEq('selected', true), state);

      return over(lensPath([index, 'score']), add(action.points))(state);
    }
    case 'selectPlayer': {
      const index = findIndex(propEq('name', action.player.name), state);
      return pipe(
        map(assoc('selected', false)),
        set(lensPath([index, 'selected']), true),
      )(state);
    }
    default:
      return state;
  }
};

const styles = {
  app: {
    backgroundColor: '#000000',
  },
};

function App() {
  const [players, dispatch] = useReducer(reducer, initialState);

  const selectPlayer = useCallback(
    (player) => {
      dispatch({
        type: 'selectPlayer',
        player,
      });
    },
    [dispatch, players],
  );
  const updatePoints = useCallback(
    (points) => {
      dispatch({
        type: 'updateScore',
        points,
      });
    },
    [dispatch],
  );

  return (
    <div style={styles.app}>
      <GameBoard
        disabled={!players.some(propEq('selected', true))}
        onQuestionClose={updatePoints}
      />
      <Players players={players} selectPlayer={selectPlayer} />
    </div>
  );
}

export default App;

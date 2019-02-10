import * as React from 'react';
import GameBoard from '../game-board';
import Players from '../players';

const styles = {
  app: {
    backgroundColor: '#000000',
  },
};

function App() {
  const players = [
    {
      name: 'Eliz',
      score: 0,
    },
    {
      name: 'Erock',
      score: 0,
    },
    {
      name: 'Dave',
      score: 0,
    },
  ];

  return (
    <div style={styles.app}>
      <GameBoard />
      <Players players={players} />
    </div>
  );
}

export default App;

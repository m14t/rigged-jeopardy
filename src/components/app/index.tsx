import * as React from 'react';
import GameBoard from '../game-board';

const styles = {
  app: {
    backgroundColor: '#000000',
  },
};

function App() {
  return (
    <div style={styles.app}>
      <GameBoard />
    </div>
  );
}

export default App;

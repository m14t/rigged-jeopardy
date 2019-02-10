import * as React from 'react';
import { Player } from '../types';

type Props = {
  players: Player[];
};

const styles = {
  players: {
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px',
    height: '10vh',
  },
  player: {
    backgroundColor: '#0000ff',
    display: 'flex',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    justifyContent: 'space-around',
    margin: '10px',
    padding: '10px',
    textAlign: 'center' as 'center',
  },
};

function Players(props: Props) {
  return (
    <div style={styles.players}>
      {props.players.map((player, i) => (
        <div key={i} style={styles.player}>
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </div>
  );
}

export default Players;

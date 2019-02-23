import * as React from 'react';
import { range, toString } from 'ramda';
import { Player } from '../types';
const { useEffect } = React;

type Props = {
  players: Player[];
  selectPlayer: (player: Player) => void;
};

const styles = {
  players: {
    color: '#ffffff',
    display: 'flex',
    fontSize: '25px',
    fontWeight: 'bold' as 'bold',
    height: '15vh',
    justifyContent: 'space-between',
    margin: '0 10px',
  },
  player: {
    backgroundColor: '#0000ff',
    border: '5px solid #0000ff',
    display: 'flex',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    justifyContent: 'space-around',
    margin: '10px',
    padding: '5px',
    textAlign: 'center' as 'center',
  },
  selected: {
    border: '5px solid #f4e542',
  },
};

function Players(props: Props) {
  const targetKeys = range(1, props.players.length + 1).map(toString);
  function downHandler({ key }: KeyboardEvent) {
    if (targetKeys.includes(key)) {
      props.selectPlayer(props.players[parseInt(key, 10) - 1]);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  return (
    <div style={styles.players}>
      {props.players.map((player, i) => (
        <div
          key={i}
          onClick={() => props.selectPlayer(player)}
          style={
            player.selected
              ? { ...styles.player, ...styles.selected }
              : styles.player
          }
        >
          <span>{player.name}</span>
          <span>{player.score}</span>
        </div>
      ))}
    </div>
  );
}

export default Players;

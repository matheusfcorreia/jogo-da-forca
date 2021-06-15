import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

import Container, { HeaderBar, Letter, Kick, Button, PlayersContainer, Player, Tip } from './style';
import WinnerModal from '../../components/WinnerModal'

const socket = io('http://192.168.0.110:3010');

const Game = (props) => {
  const kickRef = useRef();

  const [word, setWord] = useState([]);
  const [winner, setWinner] = useState(false);
  const [matched, setMatched] = useState([]);
  const [players, setPlayers] = useState([]);
  const [letter, setLetter] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('userName');
    socket.emit('newPlayer', username);
  }, [])

  useEffect(() => {
    socket.on('reload-players', allPlayers => setPlayers(allPlayers));

    socket.on('word', word => setWord(word.WORD.split('')));

    socket.on('setMatched', matchedUpdate => setMatched([...matched, ...matchedUpdate]));

    socket.on('winner', winner => {
      setWinner(winner);

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
  }, [socket])

  useEffect(() => {
    if (letter) {
      socket.emit('letter', kickRef.current.value.toUpperCase());
  
      kickRef.current.value = '';
      setLetter('');
    }
  }, [letter])

  const submit = event => {
    event.preventDefault();
    setLetter(kickRef.current.value.toUpperCase());
  }

  return (
    <>
      {winner && <WinnerModal winner={winner} />}
      <Container type='submit' onSubmit={submit}>
        <PlayersContainer>
          {players.map((player, i) => (<Player key={i}>{player.NAME} : {player.SCORE}</Player>))}
        </PlayersContainer>
        <Tip>É UMA FRUTA!</Tip>
        <HeaderBar>
          {word.map((letter, index) => (<Letter key={index} matched={matched} index={index}>{letter}</Letter>))}
        </HeaderBar>
        <Kick ref={kickRef} maxLength='1'/>
        <Button onClick={submit}>CHUTAR</ Button>
      </Container>
    </>
  );
};

export default Game;

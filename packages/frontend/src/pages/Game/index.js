import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

import Container, { HeaderBar, Letter, Kick, Button, PlayersContainer, Player } from './style';

const Game = (props) => {
  const socket = io('http://192.168.0.110:3010');
  const params = useParams();
  const kickRef = useRef();

  const [word, setWord] = useState([]);
  const [matched, setMatched] = useState([]);
  const [players, setPlayers] = useState([]);

  // const getAllLogs = async () => {
  //   const res = await RequestGetLogs();
  //   setAllLogs(res.data);
  // }

  // useEffect(() => {
  //   getAllLogs()
  // }, [dispatch]);

  useEffect(() => {
    const username = localStorage.getItem('userName');
    socket.emit('newPlayer', username);
  }, [])

  useEffect(() => {
    // const getWord = async () => {
    //   try {
    //     const { data } = await RequestGetWord();

    //     setWord(data.split(''));
    //   } catch (error){
    //     console.log(error);
    //   }
    // }

    // if (word.length < 1) getWord();

    socket.on('word', word => setWord(word.WORD.split('')));
    socket.on('reload-players', allPlayers => {
      console.log(allPlayers, '======================');
      setPlayers(allPlayers)
    });
  }, [socket]);

  const submit = event => {
    event.preventDefault();
    const indexes = [];

    word.map((letter, index) => {
      if (letter === kickRef.current.value.toUpperCase() && !matched.includes(index)) {
        indexes.push(index);
      }
    })

    if (indexes.length > 0) {
      setMatched([...matched, ...indexes]);
    }
    kickRef.current.value = '';
  }

  return (
    <Container type='submit' onSubmit={submit}>
      <PlayersContainer>
        {players.map(player => (<Player>{player.NAME}</Player>))}
        {/* <Player chance={true === 1 ? true : false}>{players[0].NAME}</Player>
        <Player chance={true === 2 ? true : false}>: </Player>
        <Player chance={true === 3 ? true : false}>: </Player> */}
      </PlayersContainer>
      <HeaderBar>
        {word.map((letter, index) => (<Letter key={index} matched={matched} index={index}>{letter}</Letter>))}
      </HeaderBar>
      <Kick ref={kickRef} maxLength='1'/>
      <Button onClick={submit}>CHUTAR</ Button>
    </Container>
  );
};

export default Game;

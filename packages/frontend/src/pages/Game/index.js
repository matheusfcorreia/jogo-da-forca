import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container, { HeaderBar, Letter, Kick, Button, PlayersContainer, Player } from './style';
import { LogsCard } from '../../components';
import { RequestGetWord } from '../../services/api';

const Game = (props) => {
  const params = useParams();
  const kickRef = useRef();

  const [word, setWord] = useState([]);
  const [matched, setMatched] = useState([]);
  const [chance, setChance] = useState(1);
  const [player1, setPlayer1] = useState({ name: '', points: 0 });
  const [player2, setPlayer2] = useState({ name: '', points: 0 });
  const [player3, setPlayer3] = useState({ name: '', points: 0 });

  // const getAllLogs = async () => {
  //   const res = await RequestGetLogs();
  //   setAllLogs(res.data);
  // }

  // useEffect(() => {
  //   getAllLogs()
  // }, [dispatch]);

  useEffect(() => {
    const { player1, player2, player3 } = params;
    const getWord = async () => {
      try {
        const { data } = await RequestGetWord();

        setWord(data.split(''));
      } catch (error){
        console.log(error);
      }
    }

    if (player1) setPlayer1({ name: player1, points: 0 });
    if (player2) setPlayer2({ name: player2, points: 0 });
    if (player3) setPlayer3({ name: player3, points: 0 });

    if (word.length < 1) getWord();
  }, [params]);

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
      setPoints(indexes.length);

    } else nextPlayer();
    kickRef.current.value = '';
  }

  useEffect(() => {
    if (matched.length === word.length) getWinner();
  }, [matched]);

  const setPoints = (points) => {
    switch(chance) {
      case 1:
        setPlayer1({ ...player1, points: player1.points + points });
        break;
      case 2:
        setPlayer2({ ...player2, points: player2.points + points });
        break;
      case 3:
        setPlayer3({ ...player3, points: player3.points + points });
        break;
    }
  }

  const getWinner = () => {
    if (player1.points > player2.points && player1.points > player3.points) {
      alert(`Jogador ${player1.name} Venceu!`);
    }; 
    if (player2.points > player1.points && player2.points > player3.points) {
      alert(`Jogador ${player2.name} Venceu!`);
    }; 
    if (player3.points > player2.points && player3.points > player1.points) {
      alert(`Jogador ${player3.name} Venceu!`);
    }; 

    if (word.length > 0) window.location.reload();
  }

  const nextPlayer = () => {
    switch (chance) {
      case 1:
        setChance(2);
        break;
      case 2:
        setChance(3);
        break;
      case 3:
        setChance(1);
        break;
    }
  }

  return (
    <Container type='submit' onSubmit={submit}>
      <PlayersContainer>
        <Player chance={chance === 1 ? true : false}>{player1.name}: {player1.points}</Player>
        <Player chance={chance === 2 ? true : false}>{player2.name}: {player2.points}</Player>
        <Player chance={chance === 3 ? true : false}>{player3.name}: {player3.points}</Player>
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

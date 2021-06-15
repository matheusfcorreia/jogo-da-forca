import GameDatabase from '../services/GameDatabase';

class GameController {
  constructor(io) {
    this.Io = io;
    this.selectedWord = undefined;
    this.matchedLetters = [];
    this.setWord();

    this.resetGame = async () => {
      this.matchedLetters = [];

      await GameDatabase.update('PLAYERS');

      this.setWord();
    };
  }

  async setWord() {
    try {
      const words = await GameDatabase.select('WORDS');
      const randomNumber = Math.floor(Math.random() * 15);

      this.selectedWord = words[randomNumber];
    } catch (err) {
      console.log('Não foi possível consultar os logs', err);
    }
  }

  async tryLetter(connection_id, kickLetter) {
    try {
      const indexes = [];
      let players = await GameDatabase.select('PLAYERS');
      this.selectedWord.WORD.split('').map((wordLetter, index) => {
        if (wordLetter === kickLetter.toUpperCase() && !this.matchedLetters.includes(index)) {
          indexes.push(index);
        }
      });

      if (indexes.length > 0) {
        this.matchedLetters = [...this.matchedLetters, ...indexes];

        await GameDatabase.update('PLAYERS', indexes.length, connection_id);
        players = await GameDatabase.select('PLAYERS');

        this.Io.sockets.emit('reload-players', players);
        this.Io.sockets.emit('setMatched', this.matchedLetters);
      }

      if (this.matchedLetters.length === this.selectedWord.WORD.split('').length) {
        const ranking = players.sort((player1, player2) => player1.SCORE + player2.SCORE);

        this.Io.sockets.emit('winner', ranking[0]);
        await this.resetGame();
      }
    } catch (err) {
      console.log(err);
      console.log('Não foi possível inserir a letra');
    }
  }
}

export default GameController;

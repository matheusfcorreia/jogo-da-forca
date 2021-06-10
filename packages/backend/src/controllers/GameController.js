import GameDatabase from '../services/GameDatabase';

class GameController {
  constructor(io) {
    this.Io = io;
    this.selectedWord = undefined;
    this.matchedLetters = [];
    this.setWord();
  }

  async setWord() {
    try {
      const words = await GameDatabase.select('WORDS');

      this.selectedWord = words[0];
    } catch (err) {
      console.log('Não foi possível consultar os logs', err);
    }
  }

  async tryLetter(connection_id, kickLetter) {
    try {
      const indexes = [];
      this.selectedWord.WORD.split('').map((wordLetter, index) => {
        if (wordLetter === kickLetter.toUpperCase() && !this.matchedLetters.includes(index)) {
          indexes.push(index);
        }
      });

      if (indexes.length > 0) {
        this.matchedLetters = [...this.matchedLetters, ...indexes];

        await GameDatabase.update('PLAYERS', indexes.length, connection_id);
        const players = await GameDatabase.select('PLAYERS');

        this.Io.sockets.emit('reload-players', players);
        this.Io.sockets.emit('setMatched', this.matchedLetters);
      }
    } catch (err) {
      console.log(err);
      console.log('Não foi possível inserir a letra');
    }
  }
}

export default GameController;

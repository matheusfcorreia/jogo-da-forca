import GameDatabase from '../services/GameDatabase';

class GameController {
  constructor(io) {
    this.Io = io;
    this.selectedWord = undefined;
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
}

export default GameController;

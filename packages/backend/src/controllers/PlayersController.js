import GameDatabase from '../services/GameDatabase';

class PlayersController {
  constructor(io) {
    this.Io = io;
  }

  async newPlayer(connection_id, name) {
    try {
      await GameDatabase.insert({ connection_id, name });
      const players = await GameDatabase.select('PLAYERS');

      console.log(players);
      this.Io.sockets.emit('reload-players', players);
    } catch (err) {
      console.log(err);
      console.log('Não foi possível consultar os players');
    }
  }

  async removePlayer(connection_id) {
    try {
      console.log(connection_id);
      await GameDatabase.delete(connection_id);
      const players = await GameDatabase.select('PLAYERS');

      this.Io.sockets.emit('reload-players', players);
    } catch (err) {
      console.log('Não foi possível remover o player');
    }
  }
}

export default PlayersController;

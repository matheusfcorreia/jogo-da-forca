import App from './app';

import PlayersController from './controllers/PlayersController';
import GameController from './controllers/GameController';
import GameDatabase from './services/GameDatabase';

class Server {
  start() {
    return new App().io;
  }

  async bootstrap() {
    try {
      const Io = await this.start();
      await GameDatabase.createDb();

      const playersController = new PlayersController(Io);
      const gameController = new GameController(Io);

      Io.on('connection', client => {
        setInterval(() => {
          client.emit('word', gameController.selectedWord);
        }, 500);

        client.on('newPlayer', async name => {
          await playersController.newPlayer(client.id, name);
        });

        client.on('letter', async letter => {
          await gameController.tryLetter(client.id, letter);
        });

        client.on('word', data => {
          console.log('chegou', data);
        });

        client.on('disconnect', async () => await playersController.removePlayer(client.id));
      });

      console.log('Api Inicializada com sucesso');
    } catch (error) {
      console.log(`Falha ao Inicializar a Api: `, error);
    }
  }
}

new Server().bootstrap();

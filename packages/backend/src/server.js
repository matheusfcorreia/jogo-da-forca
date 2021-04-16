import fs from 'fs';

import App from './app';
import environment from './common/environment';
import LogsDatabase from './services/LogsDatabase';

class Server {
  start() {
    const app = new App().express;
    return app.listen(environment.SERVER.port, environment.SERVER.host);
  }

  async initializeDB() {
    if (!fs.readdirSync(environment.DB.dbPath).find(file => file === 'logsDb.db'))
      await LogsDatabase.createDb();
  }

  async bootstrap() {
    try {
      await this.initializeDB();
      await this.start();

      console.log('Api Inicializada com sucesso');
    } catch (error) {
      console.log(`Falha ao Inicializar a Api: `, error);
    }
  }
}

new Server().bootstrap();

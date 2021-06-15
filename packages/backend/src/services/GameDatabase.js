const Database = require('sqlite-async');

import environment from '../common/environment';
import {
  playerTablePattern,
  wordsTablePattern,
  setInsertPlayerValues,
  wordsList,
} from '../utils/sqliteModels';

class GameDatabase {
  constructor() {
    this.dbPath = environment.DB.dbPath + 'gameDb.db';
  }

  async createDb() {
    try {
      const db = await Database.open(this.dbPath);

      await db.run(`CREATE TABLE IF NOT EXISTS PLAYERS (${playerTablePattern()})`);
      await db.run(`CREATE TABLE IF NOT EXISTS WORDS (${wordsTablePattern()})`);

      await db.run('DELETE FROM PLAYERS');
      for (const word of wordsList) {
        await db.run(`INSERT INTO WORDS VALUES ('${word}', 'false')`);
      }
    } catch (error) {
      throw new Error(`GameDatabase - createDb - ${error} \n`);
    }
  }

  async select(table) {
    try {
      const db = await Database.open(this.dbPath);
      return await db.all(`SELECT * FROM ${table}`);
    } catch (error) {
      throw new Error(`GameDatabase - select - ${error} \n`);
    }
  }

  async insert(values) {
    try {
      const db = await Database.open(this.dbPath);
      await db.run(`INSERT INTO PLAYERS VALUES (${setInsertPlayerValues(values)})`);
    } catch (error) {
      throw new Error(`GameDatabase - insert - ${error} \n`);
    }
  }

  async update(table, value, connection_id) {
    try {
      const db = await Database.open(this.dbPath);

      switch (table) {
        case 'WORDS':
          await db.run(
            `UPDATE WORDS SET SELECTED = ${value} WHERE CONNECTION_ID = '${connection_id}'`
          );
          break;
        case 'PLAYERS':
          if (!connection_id) {
            await db.run(`UPDATE PLAYERS SET SCORE = 0`);
          } else {
            await db.run(
              `UPDATE PLAYERS SET SCORE = SCORE + ${value} WHERE CONNECTION_ID = '${connection_id}'`
            );
          }

          break;
        default:
          throw new Error('Erro no update');
      }
    } catch (error) {
      throw new Error(`GameDatabase - update - ${error} \n`);
    }
  }

  async delete(connection_id) {
    try {
      const db = await Database.open(this.dbPath);
      await db.run(`DELETE FROM PLAYERS WHERE CONNECTION_ID = '${connection_id}'`);
    } catch (error) {
      throw new Error(`GameDatabase - delete - ${error} \n`);
    }
  }
}

export default new GameDatabase();

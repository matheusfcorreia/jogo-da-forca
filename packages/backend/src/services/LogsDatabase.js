const Database = require('sqlite-async');

import environment from '../common/environment';
import { logsTablePattern, setInsertLogsValues } from '../utils/sqliteModels';

class LogsDatabase {
  constructor() {
    this.dbPath = environment.DB.dbPath + 'logsDb.db';
  }
  async createDb() {
    try {
      const db = await Database.open(this.dbPath);
      await db.run(`CREATE TABLE LOGS (${logsTablePattern()})`);
    } catch (error) {
      throw new Error(`LogsDatabase - createDb - ${error} \n`);
    }
  }

  async insert(values) {
    try {
      const db = await Database.open(this.dbPath);
      await db.run(`INSERT INTO LOGS VALUES (${setInsertLogsValues(values)})`);
    } catch (error) {
      throw new Error(`LogsDatabase - insert - ${error} \n`);
    }
  }

  async select() {
    try {
      const db = await Database.open(this.dbPath);
      return await db.all(`SELECT * FROM LOGS`);
    } catch (error) {
      throw new Error(`LogsDatabase - select - ${error} \n`);
    }
  }
}

export default new LogsDatabase();

import LogsDatabase from '../services/LogsDatabase';

class LogsController {
  async newLog(req, res) {
    try {
      const { identification, description } = req.body;
      const date = new Date();

      await LogsDatabase.insert({ identification, description, date });

      return res.sendStatus(200);
    } catch (err) {
      return res.status(404).json('Não foi possível registrar o log');
    }
  }

  async getAllLogs(req, res) {
    try {
      const logs = await LogsDatabase.select();

      return res.status(200).json(logs);
    } catch (err) {
      return res.status(404).json('Não foi possível consultar os logs');
    }
  }
}

export default new LogsController();

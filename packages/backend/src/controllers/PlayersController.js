import LogsDatabase from '../services/LogsDatabase';

class LogsController {
  async store(req, res) {
    try {
      const logs = await LogsDatabase.select();

      return res.status(200).json(logs);
    } catch (err) {
      return res.status(404).json('Não foi possível consultar os logs');
    }
  }
}

export default new LogsController();

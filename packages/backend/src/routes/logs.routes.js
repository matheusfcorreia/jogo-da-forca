import LogsController from 'controllers/LogsController';

class SessionRoutes {
  applyRoutes(routes) {
    routes.post('/logs', LogsController.newLog);
    routes.get('/logs', LogsController.getAllLogs);
  }
}

export default SessionRoutes;

import LogsController from 'controllers/LogsController';

class SessionRoutes {
  applyRoutes(routes) {
    routes.post('/logs', LogsController.newLog);
    routes.get('/word', LogsController.getWord);
  }
}

export default SessionRoutes;

import Io from 'socket.io';

class AppController {
  constructor() {
    this.io = Io({
      cors: {
        origin: '*',
        allowedHeaders: ['Access-Control-Allow-Origin'],
      },
    });

    this.io.listen(3010);
  }
}

export default AppController;

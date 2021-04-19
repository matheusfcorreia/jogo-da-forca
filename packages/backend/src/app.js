const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const readDirRecursive = require('fs-readdir-recursive');

class AppController {
  constructor() {
    this.express = express();
    this.allRoutes = express.Router();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.json({ limit: '50mb' }));
    this.express.use(
      bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
      })
    );
    this.express.use(cors());
  }

  async routes() {
    const routesPath = require('path').join(__dirname, 'routes');
    const files = readDirRecursive(routesPath);

    const promises = files.map(async (file) => {
      let Route = (await import(`./routes/${file}`)).default;
      new Route().applyRoutes(this.allRoutes);
    });
    await Promise.all(promises);
    this.express.use('/api', this.allRoutes);
  }
}

export default AppController;

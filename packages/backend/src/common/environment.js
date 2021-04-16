const environment = {
  DB: {
    dbPath: '/',
  },
  SERVER: {
    port: process.env.BACKEND_PORT || 3010,
    host: process.env.SERVER_HOST || '0.0.0.0',
  },
};

export default environment;

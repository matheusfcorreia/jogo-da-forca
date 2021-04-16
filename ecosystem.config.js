module.exports = {
  apps: [
    {
      name: 'softcenter-api',
      script: './start-script.js',
      watch: true,
      node_args: ['--inspect=0.0.0.0'],
      env: {
        BACKEND_PORT: 3010,
        NODE_ENV: 'development',
        AUTH_URL: 'http://localhost:3006',
        DB_URL_BASE: 'mongodb://192.168.0.102:27017',
        NODE_PATH: './backend/src',
        TOKEN_EXPIRY: 36000000,
      },
      env_production: {
        PORT: 3010,
        NODE_ENV: 'production',
        AUTH_URL: 'http://acesso.softcenter.com.br',
        SOFTCENTER_IP: '187.18.106.237',
        DB_URL_BASE: 'mongodb://admin:DvdxpPInRKy0U2Xs@34.225.235.182:27017',
        NODE_PATH: './src',
        TOKEN_EXPIRY: 3600,
      },
    },
  ],
};

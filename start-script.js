// Start Frontend
require('child_process').exec('cd frontend && yarn start');

// Start Api
require('./backend/start-api-script.js');

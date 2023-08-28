const mongoose = require('mongoose');

// const log = require('./logger');

module.exports = async () => {
  try {
    const dbHost = process.env.AUTH_DB_HOST || '0.0.0.0';
    const dbPort = process.env.AUTH_DB_PORT || 27017;
    const dbName = process.env.AUTH_DB_NAME || 'admin';

    const dbString = process.env.AUTH_DB_OVERRIDE || `mongodb://${dbHost}:${dbPort}/${dbName}`;
    // log.info(`Connecting to database: ${dbString}`);
    console.log(`Connecting to database: ${dbString}`);
    await mongoose.connect(dbString);
    // log.info('Connected to MongoDB!');
    console.log('Connected to MongoDB!');
  } catch (err) {
    // log.error('Error connecting to DB: ', err);
    console.log(`Error connecting to DB: ${err}`);
    throw err;
  }
};

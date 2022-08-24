/* eslint-disable no-param-reassign */

// Connection options
const defaultOptions = {
  // Use native promises
  promiseLibrary: global.Promise,
  useMongoClient: true,
  // Write concern (Journal Acknowledged)
  w: 1,
  j: true
};

function connect (mongoose, dbURI, options = {}) {
  // Merge options with defaults
  const driverOptions = Object.assign(defaultOptions, options);

  // Use Promise from options (mongoose)
  mongoose.Promise = driverOptions.promiseLibrary;

  // Connect
  mongoose.connect(dbURI, driverOptions);

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      process.exit(0);
    });
  });

  return mongoose.connection;
}

module.exports = connect;

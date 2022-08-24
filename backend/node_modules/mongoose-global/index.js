
const mongoose = require('mongoose');
const connectDb = require('mongoose-connect-db');

function fn (dbURI, options = {}) {
  if(dbURI && typeof dbURI !== 'string') {
    throw new Error('Database URI should be a string');
  }
  dbURI && connectDb(mongoose, dbURI, options);
  return mongoose;
}

Object.defineProperties(fn, {
  mongoose: {value: mongoose},
  connect: {value: fn},
  Schema: {value: mongoose.Schema},
});

module.exports = fn;

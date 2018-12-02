const db = require('./db');

module.exports.handleUser = (email, password) => {
  db.createUser({ email, password });
};

const db = require("./db");

module.exports.handleUser = (email, password) => {
  db.saveUser({
    email,
    password,
  });
};

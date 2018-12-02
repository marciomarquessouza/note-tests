const express = require('express');
const utils = require('./utils/utils.js');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
      error: "Page not found",
      name: "New App v1.0"
    });
});

app.get("/users", (req, res) => {
  res.send([{
    name: "Marcio Marques de Souza",
    age: 35,
  }, {
    name: "Flávia Alves Monteiro",
    age: 30,
  }]);
});

app.listen(3000, () => {
  console.log("Space monkey");
});

module.exports.app = app;

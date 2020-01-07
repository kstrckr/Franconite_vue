'use strict'

const db = require('../db/db.js');

const express = require('express');

const PORT = 8080
const HOST = '0.0.0.0'

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/api/projects', (req, res) => {
  res.json(db);
})

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
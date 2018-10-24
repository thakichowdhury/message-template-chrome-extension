const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const { letter } = require('../client/helpers');
const {
  saveLetterToDrive,
  saveCoverLetterTemplate,
} = require('./helpers');

// Server Set Up
const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.resolve(__dirname, '../public')));

// CRUD functions
app.post('/makeLetter', saveLetterToDrive);

app.post('/saveLetter', saveCoverLetterTemplate);

// Server Listen at PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

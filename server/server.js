const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const { letter } = require('../client/helpers');
const PORT = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.post('/makeLetter', (req, res) => {
  const { company, values, tech } = req.body;

  company = company.replace(/ /g, `_`);

  const complete = letter(company, values, tech);
  const pathToLetter = path.resolve('../../../', 'career', 'cover_letters',`${company}-cover_letter.docx`);
  let status = `File successfully written to ${pathToLetter}`;

  fs.writeFile(pathToLetter, complete, err => {
    status = err;
  });

  res.send({
    status: status,
    letter: complete,
  });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

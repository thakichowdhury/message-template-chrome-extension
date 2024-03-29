const fs = require('fs');
const path = require('path');
const homeDir = require('os').homedir();

const pool = require('../database/connection');

const { sampleLetterTemplate: letter } = require('../client/sample_data/sampleLetterTemplate');

const extractTemplateValues = values => (
  req.body.reduce((accum, current) => {
    const { name, value } = current;
    accum[name] = value;
    return accum;
  }, {})
);

const renderValuesToLetter = (templateValues, letter) => {
  const newLetter = letter.slice().replace(/(\[|\])/g, '');

  return templateValues.reduce((accum, current) => {
    const { name, value } = current;
    accum = accum.replace(new RegExp(name, 'g'), value);
    return accum;
  }, newLetter)
};

const saveLetterToDrive = (req, res) => {
  const { body } = req;

  const renderedLetter = renderValuesToLetter(body, letter);
  
  const company = body.filter(val => val.name === 'company')[0].value;
  const formattedCompanyName = company.replace(/ /g, `_`);

  const pathToLetter = path.resolve(homeDir, 'Documents', 'career', '_cover_letters',`${formattedCompanyName}-cover_letter.docx`);
  let status = `File successfully written to ${pathToLetter}`;

  fs.writeFile(pathToLetter, renderedLetter, err => {
    console.log(err);
  });

  res.send({
    status: status,
    letter: renderedLetter,
  });
};

// CREATE
const createNewUser = (user, callback) => {
  const text = `INSERT INTO users (name) VALUES ($1)`;
  const values = Array(user);

  pool.query(text, values)
    .then(res => callback(null, res.rows[0]))
    .catch(err => callback(err));
};

const saveCoverLetterTemplate = (req, res) => {
  const { user, currentCoverLetterTemplateName, currentCoverLetterTemplateBody } = req.body;

  userId = getUserId(user, (err, response) => {
    if (err) throw err;

    if (!response) {
      createNewUser(user, () => {});
    }

    const { id:userId } = response;

    const text = `INSERT INTO cover_letters (user_id, name, body) VALUES ($1, $2, $3)`;
    const values = Array(userId, currentCoverLetterTemplateName, currentCoverLetterTemplateBody);

    pool.query(text, values)
      .then( ({ rows }) => res.send(rows[0]) )
      .catch(err => console.log(err));
  });
};

// READ
const validateUser = (req, res) => {
  const { user } = req.body;

  const text = `SELECT * FROM users WHERE name = ($1)`;
  const values = Array(user);

  pool.query(text, values)
    .then(({ rows }) => rows ? res.send(rows[0]) : res.send(null))
    .catch(err => console.log(err));
};

const getUserId = (user, callback) => {
  const text = `SELECT id FROM users WHERE name = ($1)`;
  const values = Array(user);

  pool.query(text, values)
    .then( ({ rows }) => callback(null, rows[0]))
    .catch(err => callback(err));
};

// UPDATE

// DELETE


module.exports = {
  saveLetterToDrive,
  saveCoverLetterTemplate,
};

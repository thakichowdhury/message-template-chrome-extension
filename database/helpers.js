const pool = require('./connection');

const createNewUser = (user, callback) => {
  const text = `INSERT INTO users VALUES ($1)`;

  pool.query(text, user)
    .then(res => callback(null, res.rows[0]))
    .catch(err => callback(err));
};

const validateUser = (user, callback) => {
  const text = `SELECT * FROM users WHERE name = ($1)`;

  return pool.query(text, [user])
    .then(({ rows }) => rows ? callback(null, rows) : callback(null, null))
    .catch(err => console.log(err));
};

const getUserId = (user, callback) => {
  const text = `SELECT id FROM users WHERE name = ($1)`;

  pool.query(text, [user])
    .then( ({ rows }) => callback(null, rows[0]))
    .catch(err => callback(err));
};

const saveCoverLetter = ({ user, coverLetterName, coverLetterBody }, response) => {
  userId = getUserId(user, (err, res) => {
    if (err) throw err;

    const { id } = res;

    const text = `INSERT INTO cover_letters VALUES ($1, $2, $3)`;
    const values = Array(coverLetterName, id, coverLetterBody);
  
    pool.query(text, values)
      .then( ({ rows }) => response.send(rows[0]))
      .catch(err => console.log(err));
  });
};

module.exports = {
  createNewUser,
  validateUser,
  getUserId,
  saveCoverLetter,
};

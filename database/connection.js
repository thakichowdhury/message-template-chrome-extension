const { Pool } = require('pg');

const connection = {
  host: 'localhost',
  user: 'thaki_britney',
  database: 'application_helper',
  password: '',
  porst: 5432,
};

const pool = new Pool(connection);

module.exports = pool;

-- DROP DATABASE IF EXISTS application_helper;

-- CREATE DATABASE application_helper;

\connect application_helper;

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id      SERIAL PRIMARY KEY,
  name    VARCHAR(250)
);

DROP TABLE IF EXISTS cover_letters;
CREATE TABLE cover_letters (
  id      SERIAL PRIMARY KEY,
  name    VARCHAR(250),
  user_id INT NOT NULL,
  body    VARCHAR(2500)
);

ALTER TABLE cover_letters ADD FOREIGN KEY (user_id) REFERENCES users(id);

-- CREATE INDEX cover_letters_name ON cover_letters (name);

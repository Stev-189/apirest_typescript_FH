CREATE DATABASE IF NOT EXISTS usernodedb;

USE usernodedb;

CREATE TABLE IF NOT EXISTS usuarios(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  estado tinyint(1) NOT NULL DEFAULT 1,
  createdAt TIMESTAMP,
  updateAt TIMESTAMP,
  PRIMARY KEY(id)
);

SELECT * FROM usuarios;

# tubo que al tera la table por un error por squelize la
ALTER TABLE usuarios ADD( createdAt TIMESTAMP, updatetedAt TIMESTAMP);

# corregirt nombre
ALTER TABLE usuarios RENAME COLUMN updatetedAt TO updatedAt;

# agregar unique a email
ALTER TABLE usuarios ADD UNIQUE (email);


INSERT INTO usuarios(nombre, email, estado) VALUES
  ('laika', 'laika@gmail.com', 1),
  ('nori', 'nori@gmail.com', 1),
  ('perruño', 'perruño@gmail.com', 0);
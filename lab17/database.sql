-- la base de datos la cree en mi pc directamente desde la terminal pero 
-- de igual modo pongo aqui el codigo que use para crear la base de datos

CREATE DATABASE labdb;
USE labdb;

CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  edad INT
);

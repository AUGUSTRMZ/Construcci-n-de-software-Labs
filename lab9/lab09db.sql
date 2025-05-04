create database if not exists lab09db;
USE lab09db;

-- Tabla de materiales
CREATE TABLE materiales (
  Clave BIGINT PRIMARY KEY,
  Descripcion VARCHAR(100),
  Precio DECIMAL(10,2)
);

-- Tabla de proyectos
CREATE TABLE proyectos (
  Numero BIGINT PRIMARY KEY,
  Denominacion VARCHAR(100)
);

-- Tabla de proveedores
CREATE TABLE proveedores (
  RFC VARCHAR(15) PRIMARY KEY,
  RazonSocial VARCHAR(100)
);

-- Tabla entregan (relacional con llaves foráneas)
CREATE TABLE entregan (
  Clave BIGINT,
  RFC VARCHAR(15),
  Numero BIGINT,
  Fecha DATETIME,
  Cantidad BIGINT,
  PRIMARY KEY (Clave, RFC, Numero),
  FOREIGN KEY (Clave) REFERENCES materiales(Clave),
  FOREIGN KEY (RFC) REFERENCES proveedores(RFC),
  FOREIGN KEY (Numero) REFERENCES proyectos(Numero)
);

--==========
--CONSULTAS
--==========

-- Materiales con precio mayor a $120
SELECT Clave, Descripcion, Precio
FROM materiales
WHERE Precio > 120;


-- Proyectos con entregas mayores a 500 unidades
SELECT pr.Denominacion, e.Cantidad
FROM entregan e
JOIN proyectos pr ON e.Numero = pr.Numero
WHERE e.Cantidad > 500;

-- Materiales entregados por 'La Ferre'
SELECT m.Descripcion, e.Cantidad
FROM entregan e
JOIN proveedores p ON e.RFC = p.RFC
JOIN materiales m ON e.clave = m.Clave
WHERE p.RazonSocial = 'La Ferre';

-- Total entregado por proveedor
SELECT p.RazonSocial, SUM(e.Cantidad) AS Total_Entregado
FROM entregan e
JOIN proveedores p ON e.RFC = p.RFC
GROUP BY p.RazonSocial;

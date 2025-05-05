
DROP DATABASE IF EXISTS sistema_rbac;
CREATE DATABASE sistema_rbac;
USE sistema_rbac;


CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    habilitado BOOLEAN DEFAULT TRUE
);


CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_rol VARCHAR(100) NOT NULL
);


CREATE TABLE Privilegios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    accion VARCHAR(100) NOT NULL
);


CREATE TABLE Usuario_Rol (
    id_usuario INT,
    id_rol INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_rol) REFERENCES Roles(id),
    PRIMARY KEY (id_usuario, id_rol)
);


CREATE TABLE Rol_Privilegio (
    id_rol INT,
    id_privilegio INT,
    FOREIGN KEY (id_rol) REFERENCES Roles(id),
    FOREIGN KEY (id_privilegio) REFERENCES Privilegios(id),
    PRIMARY KEY (id_rol, id_privilegio)
);


INSERT INTO Roles (id, descripcion_rol) VALUES 
(1, 'Administrador'),
(2, 'Usuario');


INSERT INTO Privilegios (id, accion) VALUES 
(1, 'ver_dashboard'),
(2, 'crear_usuario'),
(3, 'eliminar_usuario');

INSERT INTO Rol_Privilegio (id_rol, id_privilegio) VALUES
(1, 1),
(1, 2),
(1, 3);



INSERT INTO Usuarios (id, nombre, correo, contrasena) VALUES 
(1, 'Usuario Admin', '123@gmail.com', '$2a$10$3RW8TySyfM.3hHgGTBTA8ezQn1dk8fiIgm7MPhOl7vONLzrcxHKJ2');


INSERT INTO Usuario_Rol (id_usuario, id_rol) VALUES 
(1, 1);

const bcrypt = require('bcryptjs');
const db = require('../models/db');

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.login = async (req, res) => {
    const { correo, contrasena } = req.body;

    const [users] = await db.query('SELECT * FROM Usuarios WHERE correo = ?', [correo]);
    const user = users[0];

    if (user && await bcrypt.compare(contrasena, user.contrasena)) {
        const [roles] = await db.query(
            `SELECT r.descripcion_rol, p.accion
             FROM Usuario_Rol ur
             JOIN Roles r ON ur.id_rol = r.id
             JOIN Rol_Privilegio rp ON rp.id_rol = r.id
             JOIN Privilegios p ON rp.id_privilegio = p.id
             WHERE ur.id_usuario = ?`, [user.id]);

        req.session.user = { id: user.id, nombre: user.nombre, roles };
        res.redirect('/dashboard');
    } else {
        res.send('Credenciales incorrectas');
    }
};

exports.ensureAuth = (req, res, next) => {
    if (!req.session.user) return res.redirect('/login');
    next();
};

exports.dashboard = (req, res) => {
    res.render('dashboard', { user: req.session.user });
};
const bcrypt = require('bcryptjs');

const usuarios = []; // Se guardan los usuarios en memoria

exports.getSignup = (req, res) => {
  res.render('signup', { mensaje: '' });
};

exports.postSignup = (req, res) => {
  const { email, password } = req.body;
  const existe = usuarios.find(u => u.email === email);
  if (existe) {
    return res.render('signup', { mensaje: 'El usuario ya existe' });
  }

  bcrypt.hash(password, 12).then(hash => {
    usuarios.push({ email, password: hash });
    res.redirect('/login');
  });
};

exports.getLogin = (req, res) => {
  res.render('login', { mensaje: '' });
};

exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return res.render('login', { mensaje: 'Usuario no encontrado' });
  }

  bcrypt.compare(password, usuario.password).then(coincide => {
    if (coincide) {
      req.session.isLoggedIn = true;
      req.session.user = usuario;
      return req.session.save(() => {
        res.redirect('/');
      });
    }
    res.render('login', { mensaje: 'Contraseña incorrecta' });
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

exports.getHome = (req, res) => {
  res.render('home');
};

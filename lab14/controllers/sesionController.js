exports.getLogin = (req, res) => {
  const mensaje = req.flash('error');
  res.render('login', {
    titulo: 'Iniciar Sesion',
    mensaje
  });
};

exports.postLogin = (req, res) => {
  const { usuario } = req.body;

  if (!usuario || usuario.trim() === '') {
    req.flash('error', 'Debes ingresar un nombre de usuario');
    return res.redirect('/');
  }

  // Guardar usuario en cookie y sesion
  res.setHeader('Set-Cookie', `usuario=${usuario}; HttpOnly`);
  req.session.usuario = usuario;
  req.session.isLoggedIn = true;

  res.redirect('/estado');
};

exports.getEstado = (req, res) => {
  res.render('status', {
    titulo: 'Estado de sesion',
    usuario: req.session.usuario || 'Desconocido',
    login: req.session.isLoggedIn
  });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.getMensaje = (req, res) => {
  const mensaje = req.flash('flashMensaje');
  res.render('mensaje', {
    titulo: 'Flash',
    mensaje
  });
};

exports.enviarFlash = (req, res) => {
  req.flash('flashMensaje', 'Mensaje flash para una sola peticion');
  res.redirect('/mensaje');
};

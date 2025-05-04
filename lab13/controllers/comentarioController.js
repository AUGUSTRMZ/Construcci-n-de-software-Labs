const Comentario = require('../models/Comentario');

exports.getFormulario = (req, res) => {
  res.render('add', { titulo: 'Agregar comentario' });
};

exports.postComentario = (req, res) => {
  const nuevo = new Comentario(req.body.nombre, req.body.comentario);
  nuevo.save();
  res.redirect('/comentarios');
};

exports.getComentarios = (req, res) => {
  const lista = Comentario.fetchAll();
  res.render('list', { titulo: 'Lista de comentarios', comentarios: lista });
};

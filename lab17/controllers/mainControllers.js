const Persona = require('../models/Persona');

exports.getForm = (req, res) => {
  res.render('add', { titulo: 'Agregar persona', persona: null });
};

exports.postForm = (req, res) => {
  const persona = new Persona(req.body.nombre, req.body.edad);
  persona.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
};

exports.getPersonas = (req, res) => {
  Persona.fetchAll()
    .then(([rows]) => {
      res.render('list', { personas: rows, titulo: 'Lista de personas' });
    })
    .catch(err => console.log(err));
};

exports.getEdit = (req, res) => {
  Persona.findById(req.params.persona_id)
    .then(([rows]) => {
      res.render('add', { titulo: 'Editar persona', persona: rows[0] });
    })
    .catch(err => console.log(err));
};

exports.postEdit = (req, res) => {
  const persona = new Persona(req.body.nombre, req.body.edad);
  persona.update(req.body.id)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
};
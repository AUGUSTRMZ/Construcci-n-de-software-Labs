const comentarios = [];

module.exports = class Comentario {
  constructor(nombre, mensaje) {
    this.nombre = nombre;
    this.mensaje = mensaje;
  }

  save() {
    comentarios.push(this);
  }

  static fetchAll() {
    return comentarios;
  }
};

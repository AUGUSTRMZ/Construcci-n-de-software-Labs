const db = require('../util/database');

module.exports = class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  save() {
    return db.execute(
      'INSERT INTO personas (nombre, edad) VALUES (?, ?)',
      [this.nombre, this.edad]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM personas');
  }

  static findById(id) {
    return db.execute('SELECT * FROM personas WHERE id = ?', [id]);
  }

  update(id) {
    return db.execute(
      'UPDATE personas SET nombre = ?, edad = ? WHERE id = ?',
      [this.nombre, this.edad, id]
    );
  }
};
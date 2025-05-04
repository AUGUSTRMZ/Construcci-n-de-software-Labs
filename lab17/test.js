const db = require('./util/database');

db.execute('SELECT * FROM personas')
  .then(([rows, fields]) => {
    console.log('Conexión exitosa 🎉');
    console.log('Datos:', rows);
  })
  .catch(err => {
    console.error('Error de conexión ❌', err);
  });
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'lab17',
  password: 'cesar##12' // <-- cámbiala si es necesario
});

module.exports = pool.promise();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'lab17',
  password: 'cesar##12' 
});

module.exports = pool.promise();

const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'cesar##12',
    database: 'sistema_rbac'
});

module.exports = db;
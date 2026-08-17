// db.js
// This file is only responsible for connecting to our MySQL database.
// We use "mysql2/promise" so we can use async/await instead of callbacks.

const mysql = require('mysql2/promise');

// A "pool" keeps a few connections open and reuses them,
// which is better than opening a new connection every time we run a query.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',          // change this to your MySQL username
    password: '',           // change this to your MySQL password
    database: 'canteen_db',
    waitForConnections: true,
    connectionLimit: 10
});

// We export the pool so server.js / controllers can use it to run queries.
module.exports = pool;

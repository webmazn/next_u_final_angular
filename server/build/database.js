"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const keys_1 = __importDefault(require("./keys"));
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();*/
const pool = mysql_1.default.createPool(keys_1.default.database);
pool.getConnection((err, connection) => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
    /*if (err) throw err; // not connected!
    // Use the connection
    connection.query('SELECT * FROM nu_usuarios', function (error, results, fields) {
      console.log(results)
      // When done with the connection, release it.
      connection.release();
      // Handle error after the release.
      if (error) throw error;
      // Don't use the connection here, it has been returned to the pool.
    });*/
});
/*pool.getConnection().then(connection =>{
  pool.releaseConnection(connection);
  console.log('DB is connected');
});*/
/*
pool.then((r: any) => r.getConnection().then((connection:any)=>{
  r.releaseConnection(connection);
  console.log('DB is connected');
}));*/
exports.default = pool;

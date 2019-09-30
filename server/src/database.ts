import mysql from 'mysql';
import keys from './keys';

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

const pool = mysql.createPool(keys.database);

pool.getConnection( (err, connection) => {
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

export default pool;

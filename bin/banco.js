var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '9072',
  database : 'aulas_uemg'
});

module.exports = connection

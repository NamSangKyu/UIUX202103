var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'web_db'
});

connection.connect();

connection.query("insert into member values('A0009','123456','김정후',11)", function (error, results, fields) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(results.affectedRows);
});
connection.query("delete from member where name like '김정후'", function (error, results, fields) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(results.affectedRows);
});
connection.query("update member set age = age + 1", function (error, results, fields) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(results.affectedRows);
});
connection.commit();
connection.query('select * from member', function (error, results, fields) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(results);
  for (i = 0; i < results.length; i++) {
    console.log(`${results[i].id} ${results[i].pass} ${results[i].name} ${results[i].age}`);
  }
});


connection.end();
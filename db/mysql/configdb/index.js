var mysql = require('mysql');

var db = require('../conn');

var createAdmin = require('./admin.js');
createAdmin.createAdminTable();

/*
mysql.query('', function(err) {
  console.log("Cannot XXX: xxx");
  console.log(err);
});
*/

// db.query('SELECT * FROM teachers1', function (err, result){
//   if (err) {
//     console.log("SELECT * FROM: teacher");
//     console.log(err);
//   } else {
//     console.log(result)
//   }
// });


var mysql = require('mysql');

var db = require('../conn');

var data = require('./admin.data.js');


/*
mysql.query('', function(err) {
  console.log("Cannot XXX: xxx");
  console.log(err);
});
*/
var sqlQuery = ''
              + 'CREATE TABLE IF NOT EXISTS admin('
              + 'id INT NOT NULL AUTO_INCREMENT, '
              + 'PRIMARY KEY(id), '
              + 'GivenName VARCHAR(30), '
              + 'MidNames VARCHAR(40), '
              + 'Surname VARCHAR(30), '
              + 'Gender ENUM("MALE"), '
              + 'DOB DATE, '
              + 'DOH DATE '
              +  ')';

module.exports = {
    createAdminTable: function() {
        db.query('USE sql7267836', function (err) {
            if (err) {
              console.log("Cannot Use Database: sql7267836");
              console.log(err);
            } else {
              db.query(sqlQuery, function(err, result){
                if (err) {
                  console.log(err);
                } else {
                  console.log("Tabe Created: admin");
                  console.log(result);
                }
              })
            }
        });
    }
 }


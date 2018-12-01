const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database:
// var db = require('./db/mysql/connect.js');
var dbconn = require('./db/mysql/conn');

// db.con.connect(function(err) {
//   if (err) console.log(err) ;
//   console.log("Connected!");
// });

dbconn.connect(function(err) {
  if (err) console.log(err) ;
  console.log("Connected!");
});




/*
  Reading:
  Express js API
  https://expressjs.com/en/api.html

  App Get Method:
  https://expressjs.com/en/api.html#app.get.method

  App Post Method:
  https://expressjs.com/en/api.html#app.post.method

*/
app.get('/api/hi', (req, res) => {
  res.send({ express: 'Hi From Express' });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
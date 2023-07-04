const express = require('express');
const mysql   = require('mysql');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : ,
  password : '< MySQL password >',
  database : 'my_db'
});

app.get('/takeData/', function(req, res){
  res.send({myFeeling:"아 존나 힘들다 시발"});
})
app.listen(port, () => {
  console.log('server on!');
});
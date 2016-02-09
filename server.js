var express = require("express");
var mysql = require("mysql");
var app = express();

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  database: "seinfeld"
});

connection.connet(function(err){
  if(err){
    console.log("Error" err.stack);
  }
  console.log("Connected as id: %s", connection.threatId)
})

car PORT = process.env.NODE_ENV || 8080;

app. get("/cast",function(req,res){
  connection.query("SELECT name * FROM characters ORDER BY ID;", function(err, result){
    res.send(result);
  });
});

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});
const path = require("path");
var express = require("express");
var app = express();

var apiRouter = require("./router/api_v1");

//anyadir el enrutado de urls de nuestra API backend que devuelve jsons
app.use("/", apiRouter);

// static (anyadir el proyecto angular a nuestro backend y que se lo muestre al usuario)
app.use(express.static(__dirname + '/public/users-app/dist/users-app'));
app.all('*',(req, res, next) => {
  res.sendFile(path.resolve('./public/users-app/dist/users-app/index.html'));
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

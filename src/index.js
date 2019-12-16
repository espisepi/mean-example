var express = require("express");
var app = express();

//var apiRouter = require("./router/api_v1");

//app.use("/", apiRouter);

app.get("/", function(req, res) {
  res.send("Hello World!!!");
});

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});

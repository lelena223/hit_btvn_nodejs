const express = require('express');
const path = require("path");
const app = express();
const router = require("./router/index.router");
const port = 3000;

app.set("view engine" ,  "ejs");

app.set("views" , "./views");

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static(__dirname + '/public'));

app.use(router);

app.listen(port, () => {
  console.log(port);
})
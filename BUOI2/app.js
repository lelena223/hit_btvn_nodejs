const express = require('express'); 
const path = require("path");
const app = express(); 
const router = require('./router');
const port = 3000;

app.set("views", path.join(__dirname,"view"));

app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(router)

app.listen( port, () => {
    console.log(`${port}`);
})
const express = require('express');

const app = express();

const router = require('./src/router/product.router');

const port = 3000;

app.use(express.json());

app.use(router);

app.listen( port, () => {
    console.log(port);
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./db/config')
const apiRouter = require('./api/routes/api');

// db
require('./db/mongoose');

//parser
app.use(bodyParser.json());

//routes
app.use('/', apiRouter);

app.listen(port, function () {
  console.log('serwer słucha...')
})
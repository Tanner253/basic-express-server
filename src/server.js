'use strict';

const express = require('express');

const app = express();


const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handler404 = require('./error-handlers/404.js');
const handler500 = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);


app.get('/person', validator)



//error handlers
// app.use('*', handler404);
app.use(handler500);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Listening on PORT: ${PORT}`);
    })
  }
}
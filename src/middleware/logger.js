'use strict';

function logger (req, res, next) {
  console.log(req.path);
  console.log(req.ip);
  console.log(req.query.name);
  next(); //force an error
}

module.exports = logger;
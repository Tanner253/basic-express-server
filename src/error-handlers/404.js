'use strict';
function throwErr (err, req, res, next) {
  console.log('Log from throwErr404: ', err);
  res.status(404).send(err.message);
}

module.exports = throwErr;


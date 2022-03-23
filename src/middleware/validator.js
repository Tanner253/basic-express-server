'use strict';

function validator (req, res, next) {
  if(req.query.name){
    res.status(200).send({
      name: req.query.name
    })
  }else{
    next({ status: 404, message: 'no request query present'});
  }
}

module.exports = validator; 
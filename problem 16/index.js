// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = ( req, res, next ) => {
  console.log( req.method );
  console.log( req.path );
  next();
}

app.use( logRequest );

module.exports = app;

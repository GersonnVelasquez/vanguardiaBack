"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = process.env.PORT || 3000;
require("dotenv").config();

// mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://adminVanguardia:pass123@cluster0.lt8fs.mongodb.net/Vanguardia?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
  console.log("Conexion a la BD bien!!");

  app.listen(port, () => {
    console.log("servidor corriendo en http://localhost:" + port);
  });
});

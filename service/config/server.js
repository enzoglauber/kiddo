var port = 3000;
// 
var bodyParser = require('body-parser');
var express = require('express');
var server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Porta de escuta do servidor
server.listen(process.env.PORT || port, function () {
  console.log('Seu amooorrr me pegouu! Vou trampar na Kiddo e num tem caô!!! s2');
});

module.exports = server
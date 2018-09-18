var express = require('express');
var http = require('http');
const csv = require('csvtojson');

var app = express();
var Client = require('ftp');
var ftp = new Client();
// 
app.get('/', function (req, res) {
  res.send("Hello World");
});
// 
app.listen(4000, function () {
  ftp.on('ready', function () {
    ftp.get('programming-languages.csv', function (err, stream) {
      if (err) throw err;
      // convert csv
      csv({
        noheader: true,
        output: "csv"
      })
      .fromString(stream)
      .then((csvRows) => {
        csvRows.forEach(function (row, index) {
          if (index) { // nao pega o header
            add({ name: row[0], url: row[1] });
          }
        });
      })
    });
  });
  // connect ftp
  ftp.connect({host:'localhost', port: 21, user:'test', password: 'test'});
  
  add = function ( language ) {
    var options = {
      host: 'localhost', port: 3000, path: '/api/language', method: 'POST', headers: {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: language
    }
  
    var request = http.request(options, function (response) {
      console.log('response', response);
    });
  
    request.write('message');
    request.end();  
  } 
  //nice log
  console.log('Seu amooorrr me pegouu! Vou trampar na Kiddo e num tem caô!!! s2');
});



var express = require('express');
var os = require('os');
var app = express();

for (var i = 0, hash = 0; i < os.hostname().length; hash = os.hostname().charCodeAt(i++) + ((hash << 5) - hash));
for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

app.get('/', function (req, res) {
  res.send('<!DOCTYPE html><html><head>' +
    '<title>Node scaling demo</title></head><body>' +
      '<h1>' + os.hostname() + '</h1>' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">' +
        '<circle cx="50" cy="50" r="48" fill="' + colour + '" stroke="#000"/>' +
        '<path d="M50,2a48,48 0 1 1 0,96a24 24 0 1 1 0-48a24 24 0 1 0 0-48" fill="#000"/>' +
        '<circle cx="50" cy="26" r="6" fill="#000"/>' +
        '<circle cx="50" cy="74" r="6" fill="#FFF"/>' +
      '</svg>' +
    '</body></html>');
  console.log('Hello method called, image returned')
});

var server = app.listen(80, function () {
  console.log('Example app up, returning image of colour ' + colour);
});

var SomeClass = require('./SomeClass.js');

var obj = new SomeClass('aaaa');
obj.printFirst();

console.log('What is property:', obj.someProperty);
console.log('Hello');


// var app = require('express')();
// app.get('/hello/:name', function(req, res){
//   res.send('Hello ' + req.params.name);
// });
// app.listen(1337);

// var http = require('http');
// server = http.createServer(function(req, res){
//   res.end('Hello World');
//
//
// })
//
// server.listen(80);

// server.listen(1337, function(){
//   console.log('Server running at http://localhost:1337');
// });

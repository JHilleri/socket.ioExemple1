var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/www/'));

http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
  console.log('listening');
});

io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  socket.on("message", function (message) {
    if (message.text !== "") {
      io.emit("message", message);
      console.log(message);
    }
  });
});
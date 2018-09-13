
var socket = io();
socket.on('connect', function() {
  console.log('Connected to server');
  
  socket.emit('createMessgae',{
    from:'Node@yahoo.com',
    text:'Hello'
  });
});
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
socket.on('newMessage', function(message){
  console.log('newmessage', message);
});
// socket.emit(newFunction(),{ 
//   to:'ankit@yahoo.com',
//   text:'Hello there from Ankit'
// })
// function newFunction() {
//   return 'createEmail'; 
// }


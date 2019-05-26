const express=require('express');
const socket=require('socket.io');
const cors=require('cors');


//create server
const app = express();

app.use(express.static('public'));
const server=app.listen(4300, ()=> console.log("listing at port http://localhost:4300"));

//server

const io=socket(server);
io.on('connection',socket=>{
	socket.on('chating',function(data){
		console.log(data);
		io.sockets.emit('chating',data);
	})
});

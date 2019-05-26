const socket=io();
var username=document.getElementById("btn-input");
let message=document.getElementById('message');
let send =document.getElementById('btn-chat');
let today=new Date();
var time = today.getHours() + ":" + today.getMinutes();
send.addEventListener('click',function(){
	socket.emit('chating',{
		username:username.value,
		message:message.value
	})
});
socket.on('chating',function(data){
	console.log(data);
	let uperdiv=document.getElementById('uprdiv');
	let msg='<ul class="chat"><li class="left clearfix"><span class="chat-img pull-left"><label>' + data.username +'</label></span><div class="chat-body clearfix"><p>' + data.message +'</p><small class="pull-right text-muted"><span class="glyphicon glyphicon-time"></span> at '+ time+' </small></div></li></ul>'
    uperdiv.innerHTML +=msg;
})


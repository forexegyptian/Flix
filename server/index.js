// event emitters
//streams 
//clusters

const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{

	res.write("Hello Node \n");

setTimeout(()=>{

	res.write("Still on. ...\n");
	res.end();
},3000);

	
});

server.listen(8080);
/*
http.createServer((req,res)=>{

});
http.listen(8080);
*/





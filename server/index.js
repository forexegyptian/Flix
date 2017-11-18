// event emitters
//streams 
//clusters

const http = require('http');
const server = http.createServer();
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('client'));
app.listen(8080);

//server.on('request',(req,res)=>{
//res.end(fs.readFileSync(__dirname+'/../client/index.html'));

/*
res.write("Hello Node \n");
setTimeout(()=>{

	res.write("Still on. ...\n");
	res.end();
},3000);
*/
	
//});

//server.listen(8080);

/*
http.createServer((req,res)=>{

});
http.listen(8080);
*/





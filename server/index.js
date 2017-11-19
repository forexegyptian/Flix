//event emitters
//streams 
//clusters

//import serverRender from './render';

/*
const http = require('http');
const server = http.createServer();
const fs = require('fs');
*/

const express = require('express')

const app = express();

app.use(express.static('client'));
app.set('view engine','ejs');

import serverRender from './render'
import apiRouter from './apiRouter'

app.get('/',(req,res)=>{

	res.render('index',{

		content: serverRender()
	});
});

app.use('/api',apiRouter);

app.listen(8080,() => console.log('Server is running'));

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





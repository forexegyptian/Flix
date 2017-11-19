var pg = require('pg');
var pool = new pg.Pool({
	user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});


const express = require('express');

const router = express.router();

router.get('/films',(req,res)=>{
     //read from pgs
     pool.query('SELECT * from films', [],function(err,result){
	if (err) throw err;

     res.send(result.rows);
    
	});
});

router.get('/films/:filmID/ratings',(req,res)=>{
     //read from pgs
     pool.query('SELECT * from reviews where book_id = $1', [req.params.bookId],function(err,result){
	if (err) throw err;

     res.send(result.rows);
    
	});
});

export default router;
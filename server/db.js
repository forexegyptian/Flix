var pg = require('pg');
var pool = new pg.Pool({
	user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
});

pool.connect(function(err,client,done){
	if(err) throw err;


client.query('SELECT * from films', [],function(err,result){
	if (err) throw err;

console.log(result.rows);


client.end(function(err){
	if(err) throw err;
});
});
});
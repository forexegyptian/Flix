const express = require('express');

const router = express.router();

router.get('/test',(req,res)=>{


	res.send('Hello Express...');
});

export default router;
const router = require('express').Router();

router.get('/test', (req, res, next)=>{
	res.send('test!');
})

module.exports = router; 
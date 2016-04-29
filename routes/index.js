var express = require('express');
var router = express.Router();
var path = require('path');
var userRouter = require('./user');


router.use('/user', userRouter);
router.use('/', function(req, res , err){
    res.sendFile(path.join(__dirname.split('\\').slice(0, -1).join('\\'), 'index.html'));
});

module.exports = router;


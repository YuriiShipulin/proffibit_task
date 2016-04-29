var express = require('express');
var router = express.Router();
var UserHandler = require('../handlers/user');
var handler = new UserHandler();

router.get('/', handler.get);
router.get('/:id', handler.getById);
router.post('/', handler.create);
router.put('/:id', handler.update);
router.delete('/:id', handler.remove);

module.exports = router;
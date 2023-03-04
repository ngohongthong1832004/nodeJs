const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

// Follow the order because if you put / on the top then rest is disable
router.use('/create', courseController.create);

router.post('/store', courseController.store);

router.use('/:slug', courseController.show);


module.exports = router;

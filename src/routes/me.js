const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

// Follow the order because if you put / on the top then rest is disable

router.use('/my-course/edit/:id', meController.edit);

router.put('/my-course/:id', meController.update);

router.patch('/my-course/:id/restore', meController.restore);

router.delete('/my-course/delete/:id', meController.delete);

router.delete('/my-course/delete/force/:id', meController.deleteForce);

router.use('/my-course', meController.show);

router.use('/bin', meController.showBin);


module.exports = router;

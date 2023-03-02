const express = require('express')
const router = express.Router()

const SiteController = require('../app/controllers/SiteController')


// Follow the order because if you put / on the top then rest is disable

router.use('/', SiteController.index )



module.exports = router
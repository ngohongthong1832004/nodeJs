const express = require('express')
const router = express.Router()

const searchController = require('../app/controllers/SearchController')


// Follow the order because if you put / on the top then rest is disable
router.use('/show', searchController.show )

router.use('/', searchController.index )


module.exports = router
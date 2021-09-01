const router = require('express').Router()
const users = require('../../controllers/user.controller')

//  @route      GET /api/users
//  @access     public
//  @desc       Retrieve all users
router.get('/', users.findAll)

module.exports = router
const router = require('express').Router()
const users = require('../../controllers/user.controller')

//  @route      GET /api/users
//  @access     public
//  @desc       Retrieve all users
router.get('/', users.findAll)

//  @route      GET /api/users/:id
//  @access     public
//  @desc       Retrieve User by ID
router.get('/:id', users.findOne)

//  @route      POST /api/users
//  @access     public
//  @desc       Create new user
router.post('/', users.addUser)

//  @route      PUT /api/users/:id
//  @access     public
//  @desc       Update user
router.put('/:id', users.updateUser)

//  @route      DELETE /api/users/:id
//  @access     public
//  @desc       Delete User Account
router.delete('/:id', users.deleteUser)

module.exports = router
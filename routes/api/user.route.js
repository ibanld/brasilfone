const router = require('express').Router()
const users = require('../../controllers/user.controller')
const verifyToken = require('../../middleware/authJwt')

// Setting Headers for routes with Private access
router.use( (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-auth-token, Origin, Content-Type, Accept"
    )
    next()
})

//  @route      GET /api/users
//  @access     private
//  @desc       Retrieve all users
router.get('/', verifyToken, users.findAll)

//  @route      GET /api/users/:id
//  @access     private
//  @desc       Retrieve User by ID
router.get('/:id', verifyToken, users.findOne)

//  @route      POST /api/users
//  @access     public
//  @desc       Create new user
router.post('/cadastre-se', users.addUser)

//  @route      PUT /api/users/:id
//  @access     private
//  @desc       Update user
router.put('/:id', verifyToken, users.updateUser)

//  @route      GET /api/users/email/:email
//  @access     private
//  @desc       Get User Account by Email
router.get('/email/:email', verifyToken, users.findByMail)

//  @route      DELETE /api/users/:id
//  @access     private
//  @desc       Delete User Account
router.delete('/:id', verifyToken, users.deleteUser)

// -- LOGIN ROUTE -- //
//  @route      POST /api/users/login
//  @access     public
//  @desc       Login User
router.post('/login', users.loginUser)

module.exports = router
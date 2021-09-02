const router = require('express').Router()
const sessions = require('../../controllers/session.controller')

//  @route      POST /api/auth/
//  @access     private
//  @desc       Create session for logged in User
router.post('/', sessions.newSession)

module.exports = router
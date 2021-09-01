const router = require('express').Router()
const sessions = require('../../controllers/session.controller')

//  @route      GET /api/auth/sessions
//  @access     private
//  @desc       Retrieve all sessions
router.get('/sessions', sessions.getAll)

//  @route      POST /api/auth/
//  @access     private
//  @desc       Create session for logged in User
router.post('/sessions', sessions.newSession)

//  @route      DELETE /api/auth/sessions/:id
//  @access     private
//  @desc       Delete all sessions for one User
router.delete('/sessions/:id', sessions.deleteUserSessions)

//  @route      DELETE /api/auth/sessions/restart
//  @access     private
//  @desc       Delete all sessions for all users
router.delete('/sessions/restart', sessions.deleteAll)

module.exports = router
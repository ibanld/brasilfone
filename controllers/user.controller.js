const db = require('../config/db')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.findAll =  async() => {
    try {
        const users = User.findAll()
        if (users) {
            res.status(200).send(users)
        } 
    } catch (err) {
        res.status(501).send({message: 'There was an error retrieving Users'})
    }
}
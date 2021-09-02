const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.newSession = async (req, res) => {
    try {
        const email = req.body.email
        // Use email of logged user to build token
        const token = await jwt.sign({ email: email }, process.env.JWT_SECRET)
        if (token) {
            return res.send(token)
        }
    } catch (err) {
        return res.send({message: ''})
    }
}

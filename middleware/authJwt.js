const jwt = require('jsonwebtoken')
require('dotenv').config()

verifyToken = (req, res, next) => {
    let token = req.header('x-auth-token')

    if (!token)  {
        return res.send({ message: "No token provided" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (req.email = decoded.email) {
            next()
        }
    } catch (err) {
        res.send({ msg: err.message || 'Token is not valid' })
    }
}

module.exports = verifyToken
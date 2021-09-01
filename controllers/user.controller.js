const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll()
        if (!users) {
            res.send({message: 'Nao foram achados usuários'})
        } else {
            res.send(JSON.stringify(users))
        }
    } catch (err) {
        res.send({message: 'There was an error retrieving all Users'})
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id)
        if (!user) {
            res.send({ message: `Nao foi achado nenhum usuário com ID ${id}` })
        } else {
            res.send(user)
        }
    } catch (err) {
        res.send({message: 'There was an error retrieving the User'})
    }
}

exports.addUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
           const hash = bcrypt.hashSync(password, 10)
           const saveUser = await User.create({
               email: email,
               senha: hash
           })
            if (saveUser) {
                return res.send({ message: `User with E-Mail: ${email} was created` })
            }
        } else {
            res.send({ message: 'Some field(s) is/are missing' })
        }

    } catch (err) {
        res.send({message: err.message})
    }
}
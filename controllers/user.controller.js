const User = require('../models/User')
const bcrypt = require('bcryptjs')

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll()
        if (!users) {
          return  res.send({message: 'Nao foram achados usuários'})
        } else {
          return  res.send(users)
        }
    } catch (err) {
       return res.send({message: 'There was an error retrieving all Users'})
    }
}

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByPk(id)
        if (!user) {
           return res.send({ message: `Nao foi achado nenhum usuário com ID ${id}` })
        } else {
           return res.send(user)
        }
    } catch (err) {
      return res.send({message: 'There was an error retrieving the User'})
    }
}

exports.addUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email) {
           return res.send({ message: 'Email is missing' })
        }
        if (!password) {
            return res.send({ message: 'Password is missing' })
        }

        if (email && password) {
            // Check if user is already in the database
            const myUser = await User.findOne({ email: email })
            if (myUser) {
                return res.send({ message: `User with E-Mail ${email} already exists`})
            } else {
                // Encrypt User password before saving
                const hash = bcrypt.hashSync(password, 10)
                // Save User into DB
                const saveUser = await User.create({
                   email: email,
                   senha: hash
                })
                // Inform User was created
                if (saveUser) {
                    return res.send({ message: `User with E-Mail: ${email} was created` })
                }
            }
        } 

    } catch (err) {
       return res.send({message: err.message})
    }
}


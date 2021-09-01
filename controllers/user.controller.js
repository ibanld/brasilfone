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

exports.updateUser = async (req, res) => {
    try {
        // We receive the user Id from the params /api/users/:id
        const id = req.params.id
        // Action: what are we going to update?
        // Payload: the new value we are saving
        const { action, payload } = req.body
        switch (action) {
            case 'UPDATE_EMAIL':
                const email = { email: payload }
                const updateEmail = await User.update(email, {where: { id: id } })
                if (updateEmail) {
                    return res.send({ message: 'E-Mail foi atualizado' })
                }
            case 'UPDATE_PASSWORD':
                const hash = bcrypt.hashSync(payload, 10)
                const password = {senha: hash}
                const updatePassword = await User.update(password, { where: { id: id } })
                if (updatePassword) {
                    return res.send({ message: 'Senha foi atualizada' })
                }
            default:
                return res.send({ message: `${action} unknown!` })
        }

    } catch (err) {
        return res.send({message: err.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        const delUser = await User.destroy({ where: { id: id } })
        if (delUser) {
            return res.send({ message: 'User was Deleted' })
        }
    } catch (err) {
        return res.send({message: err.message})
    }
}
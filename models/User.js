const { DataTypes } = require('sequelize')
const connect = require('../config/connect')

const User = connect.define('User', {
    // Model fields
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Connect to database
    connect,
    // This connects the model to an already existing table 
    tableName: 'usuarios'
})

module.exports = User


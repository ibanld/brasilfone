const { Datatypes } = require('sequelize')
const db = require('./config/db')

const User = db.define('User', {
    // Model fields
    id: { 
        type: DataTypes.INTENGER, 
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Datatypes.STRING,
        allowNull: false
    },
    senha: {
        type: Datatypes.STRING,
        allowNull: false
    }
}, {
    // Connect to database
    db,
    // This connects the model to an already existing table 
    tableName: 'usuarios'
})

module.exports = User


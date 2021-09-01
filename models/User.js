const { Sequelize, Datatypes, Model } = require('sequelize')
const db = require('./config/db')

class User extends Model {}

User.init({
    // Model fields
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
    // This connects the model to the Table 
    tableName: 'usuarios'
})
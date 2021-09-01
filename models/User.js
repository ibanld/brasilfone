const { Datatypes } = require('sequelize')
const db = require('./config/db')

const User = db.define({
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
    // This connects the model to the Table 
    tableName: 'usuarios'
})

module.exports = User


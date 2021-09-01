const { DataTypes } = require('sequelize')
const { User } = require('./User')
const connect = require('../config/connect')

const Session = connect.define('Session', {
    // Model fields
    userId: {
        type: DataTypes.INTEGER,
        references: {
          // This is a reference to another model
          model: User,
          // This is the column name of the referenced model
          key: 'id',
        }
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Connect to database
    connect,
    // This will make the Table be named Sessions
    modelName: 'Session'
})

module.exports = Session


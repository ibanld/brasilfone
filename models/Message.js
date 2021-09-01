const { Sequelize, DataTypes } = require('sequelize')
const connect = require('../config/connect')
const User = require('./User')

const Message = connect.define('Message',{
    // Model fields
    id: { 
        type: DataTypes.UUID, 
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
          // This is a reference to another model
          model: User,
          // This is the column name of the referenced model
          key: 'id',
        }
      },
}, {
    // Connect to database
    connect,
    // Name of the table in the database
    modelName: 'Message'
})

module.exports = Message


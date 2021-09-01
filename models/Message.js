const { Datatypes } = require('sequelize')
const db = require('./config/db')
const User = require('./User')

const Message = db.define({
    // Model fields
    id: { 
        type: DataTypes.UUID, 
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title: {
        type: Datatypes.STRING,
        allowNull: false
    },
    content: {
        type: Datatypes.TEXT,
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
    db,
    // Name of the table in the database
    modelName: 'Message'
})

module.exports = Message


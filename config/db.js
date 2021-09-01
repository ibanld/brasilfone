const { Sequelize } = require('sequelize')
const User = require('../models/User')
const Message = require('../models/Message')

// Connect to Database
const db = async () => {
  const sequelize = new Sequelize(process.env.DB_URL)
    try {

      // Creating all the Tables in case they don't exist in the DB
      await User.sync()
      await Message.sync()

      // Authenticate database
     const auth =  await sequelize.authenticate()
      if (auth) {
        console.log('Connection has been established successfully.')
      }
    } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
}

module.exports = db
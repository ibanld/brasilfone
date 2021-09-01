const { Sequelize } = require('sequelize')
const User = require('../models/User')
const Session = require('../models/Session')

// Connect to Database
const db = async () => {
  const sequelize = new Sequelize(process.env.DB_URL)
    try {
      // Syncronizing Tables with Database
      await User.sync()
      await Session.sync()

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
const { Sequelize } = require('sequelize')
const User = require('../models/User')
require('dotenv').config()

// Connect to Database
const db = async () => {
  try {
    const sequelize = new Sequelize(
          process.env.DB_NAME, 
          process.env.DB_USER, 
          process.env.DB_PASSWORD, {
          host: process.env.DB_HOST ,
          dialect: 'postgres'
        })
    // Syncronizing Tables with Database
      await User.sync()

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
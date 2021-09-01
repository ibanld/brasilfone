const { Sequelize } = require('sequelize')

// Connect to Database
const db = async () => {
  const sequelize = new Sequelize(process.env.DB_URL)
    try {
      const syncTables = await sequelize.sync()
      const connect =  await sequelize.authenticate()
      if (syncTables && connect) {
        console.log('Connection has been established successfully.')
      }
    } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
}

module.exports = db
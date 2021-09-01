const { Sequelize } = require('sequelize')

const connect = new Sequelize(process.env.DB_URL)

module.exports = connect
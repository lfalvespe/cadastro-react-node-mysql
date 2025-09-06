const { Sequelize } = require('sequelize')

require('@dotenvx/dotenvx').config({override: true})

const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST_NAME,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        dialectModule: require('mysql2')
    }
)

// try {
//     sequelize.authenticate()
//     console.log('Conectado com sucesso ao sequelize')
// } catch (error) {
//     console.log(error)
// }

module.exports = sequelize
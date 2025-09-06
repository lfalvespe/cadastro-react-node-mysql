const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        require: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
    },
    active: {
        type:DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

})

module.exports = User
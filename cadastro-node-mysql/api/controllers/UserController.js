const { where } = require('sequelize')
const User = require('../models/User')

module.exports = class UserController {
    static async showUsers(req, res) {

        const users = await User.findAll({raw: true})
       
        res.json(users)
    }
    static async createUser(req, res) {
        const user = {
            name: req.body.name,
            birthday: req.body.birthday,
            email: req.body.email,
            occupation: req.body.occupation,
            active: req.body.active
        }

        const createdUser = await User.create(user)
        res.json(createdUser)
    }
    static async showUser(req, res) {
        const id = req.params.id
        const user = await User.findOne({ where: { id: id }, raw: true }) 

        res.json(user)
    }
    static async deletUser(req, res) {
        const id = req.body.id

       const deletedUser =  await User.destroy({ where: {id: id} })

        res.json(deletedUser)
    }
    static async updateUser(req, res) {
        const id = req.body.id

        const user = {
            name: req.body.name,
            birthday: req.body.birthday,
            email: req.body.email,
            occupation: req.body.occupation,
            active: req.body.active 
        }

        const updatedUser =  await User.update(user, { where: { id: id }})

        res.json('Sucess: ', updatedUser)
    }
}
const Sequelize = require('sequelize');

const db = require('../core/database');

const User = db.define('user',{
    username:{
        type: Sequelize.STRING,
        primaryKey:true
    },
    u_password:{
        type: Sequelize.STRING
    },
    u_role:{
        type: Sequelize.STRING
    }
})

module.exports = User;
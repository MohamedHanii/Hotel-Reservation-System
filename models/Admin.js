const Sequelize = require('sequelize');

const db = require('../core/database');

const Admin = db.define('admin',{
    adminID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING
    }
})

module.exports = Owner;
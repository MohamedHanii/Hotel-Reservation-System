const Sequelize = require('sequelize');

const db = require('../core/database');

const Owner = db.define('owner',{
    ownerID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING
    }
})

module.exports = Owner;
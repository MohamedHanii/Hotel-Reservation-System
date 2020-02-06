const Sequelize = require('sequelize');

const db = require('../core/database');

const Customer = db.define('customer',{
    custID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING
    },
    VIP:{
        type: Sequelize.BOOLEAN
    },
    blacklist:{
        type: Sequelize.BOOLEAN
    }
})

module.exports = Customer;
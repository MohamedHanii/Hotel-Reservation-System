const Sequelize = require('sequelize');

const db = require('../core/database');

const Bill = db.define('bill',{
    bill_ID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    hotelID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    roomID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    custID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    price:{
        type: Sequelize.INTEGER
    },
    rev_date:{
        type: Sequelize.DATE
    }
})

module.exports = Bill;
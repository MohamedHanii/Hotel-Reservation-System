const Sequelize = require('sequelize');

const db = require('../core/database');

const Hotel = db.define('hotel',{
    hotelID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    hotelLocation:{
        type: Sequelize.STRING
    },
    hotelName:{
        type: Sequelize.STRING
    },
    stars:{
        type: Sequelize.INTEGER
    },
    rating:{
        type: Sequelize.INTEGER
    },
    suspened:{
        type: Sequelize.BOOLEAN
    },
    ownerID:{
        type: Sequelize.INTEGER
    },
    ImageURL:{
        type: Sequelize.STRING
    }

    
})

module.exports= Hotel;
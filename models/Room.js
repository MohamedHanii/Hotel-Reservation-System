const Sequelize = require('sequelize');

const db = require('../core/database');

const Room = db.define('room',{
    hotelID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    roomID:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    hotelName:{
        type: Sequelize.STRING
    },
    price:{
        type: Sequelize.INTEGER
    },
    type:{
        type: Sequelize.STRING
    },
    count:{
        type: Sequelize.INTEGER
    },
    facilities:{
        type: Sequelize.STRING
    },
    ImageURL:{
        type: Sequelize.STRING
    }

    
})

module.exports= Room;
const util = require("util");
const mysql = require("mysql");
const Sequelize = require('sequelize');

 /** 
   * Connection to database
   **/

const db = new Sequelize('hotels_system', 'root', '5072042Lasther0', {
   host: 'localhost',
   dialect: 'mysql',
   define: {
      timestamps: false
    },
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});

//Testing Returing a promise
db.authenticate()
   .then(()=> console.log('Database Connected'))
   .catch(err=> console.log(err))

   module.exports = db;
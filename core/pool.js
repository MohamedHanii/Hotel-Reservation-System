const util = require("util");
const mysql = require("mysql");
 /** 
   * Connection to database
   **/
const pool = mysql.createConnection({
   connectTimeout:10,
   host: 'localhost',
   username : 'admin',
   password : '5072042Lasther0',
   database : 'hotels_system'

});

pool.getConection((err,connection)=>{
   if(err)
      console.log("Something Went Wrong With Database");
   if(connection)
      connection.relase();
   return;
});

pool.query = util.promisify(pool.query);
module.exports = pool;
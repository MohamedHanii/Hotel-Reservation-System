const pool = require("./pool");
const bcrypt = require("bcryptjs");

function User(){

};

User.prototype={
    find: function(user = null,callback)
    {
        if(user){
            var field = Number.isInteger(user)? 'custID': 'username';
        }
        let sql = `SELECT *FROM customers WHERE ${field}=?`;
        pool.query(sql,user,function(){
            if(err) throw err;
            callback(result);
        });
    },
    create: function(body,callback){
        let pwd = body.password;
        var bind = [];
        for(prop in body){
            bind.push(prop);
        }
        body.password = bcrypt.hashSync(pwd,10);
        let sql = `INSERT INTO `;
        pool.query(sql,bind,function(err,lastId){
            if(err) throw err;
            callback(lastId);
        });
    }
}
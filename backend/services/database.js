require("dotenv").config();
const { Sequelize } = require("sequelize");
const credentials = require("../config/const");

if(process.env.DB_HOST == 'localhost'){
    const conn = new Sequelize(credentials.dbName, credentials.dbUser, credentials.dbPass,{
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false,
    dialectOptions: process.env.SSL_OPTION
    });
    module.exports = conn;}
else{
    const conn = new Sequelize(`${process.env.DB_URL}`,{
        ssl: true,
        dialectOptions:{
            require: true,
            rejectUnauthorized: false
        }
    });
    module.exports = conn;
}

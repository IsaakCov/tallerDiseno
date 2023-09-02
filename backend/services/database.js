require('dotenv').config();
const {Sequelize} = require('sequelize');
const credentials = require('../config/const');


const conn = new Sequelize(credentials.dbName, credentials.dbUser, credentials.dbPass,{
    dialect: 'mysql',
    host: 'localhost',
  /*   database: process.env.dbName, */
/*     port: 21, */
    logging: false
});

module.exports = conn;
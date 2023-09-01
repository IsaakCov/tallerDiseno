require('dotenv').config();
const {Sequelize} = require('sequelize');
const credentials = require('../config/const');

const conn = new Sequelize(credentials.dbName, credentials.dbUser, credentials.dbPass,{
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false,
    dialectOptions: process.env.SSL_OPTION
});

module.exports = conn;
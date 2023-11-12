const dbConfig = require('../config/db.config');
const {Sequelize, Model} = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD,{
    dialect: dbConfig.USER,
    host: dbConfig.HOST,
    logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Products = require('./products')(sequelize, Sequelize, Model);

db.sequelize.sync();

module.exports = db;
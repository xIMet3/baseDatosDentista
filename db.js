const config = require('./config/config.json');
const { Sequelize } = require('sequelize');

const seqyelize = new Sequelize (

    proces.env.MYSQL_DATABASE || config.development.database,
    proces.env.MYSQL_USER || config.development.username,
    proces.env.MYSQL_PASSWORD || config.development.password,
    {
        host: proces.env. MYSQL_HOST || config.development.host,
        port: procces.env.MYSQL_PORT || config.development.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {

            max5,
            min:0,
            aquire: 30000,
            idle: 10000
        }
    }
    

);

module.exports = sequelize.authenticate()
.then((db) => {
    console.log('MYSQL connected');
    return db;
})
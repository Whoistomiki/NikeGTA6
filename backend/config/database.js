const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, 
  {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

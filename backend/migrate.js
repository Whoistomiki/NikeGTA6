require('dotenv').config();
const { sequelize } = require('./models');

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('An error occurred while synchronizing the database:', error);
    }).then (() => {
        sequelize.close();
    });

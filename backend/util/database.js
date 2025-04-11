const Sequelize = require('sequelize');

const sequelize= new Sequelize('expensetrackerfullstack', 'root', 'Helloworld1*',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports=sequelize;
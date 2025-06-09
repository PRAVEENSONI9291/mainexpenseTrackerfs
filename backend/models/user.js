const Sequelize= require('sequelize');

const sequelize= require('../util/database');

const user= sequelize.define('users',
    {
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
            
        },

       
        name:{
            type:Sequelize.STRING,
            allowNull: false

        },
        email:{
            type:Sequelize.STRING,
            allowNull: false
            
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false

        },
        isPremium:{
            type:Sequelize.BOOLEAN,
            allowNull:false
        },
        totalExpense:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    }
);


module.exports= user;
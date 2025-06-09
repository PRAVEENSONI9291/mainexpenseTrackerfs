const Sequelize= require('sequelize');


const sequelize= require('../util/database');

const order= sequelize.define('orders',
    {
         id:{
                    type: Sequelize.STRING,
                    allowNull: false,
                    primaryKey:true
                    // autoIncrement: true
            
                },
                // paymentId:{
                //     type:Sequelize.STRING

                // },
        
               
                status:{
                    type: Sequelize.STRING,
                    allowNull: false
                }
    }
);



module.exports= order;
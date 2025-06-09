const express= require('express');
const cors= require('cors');
const bp = require('body-parser');
require("dotenv").config({ path: "./util/.env" });







const sequelize= require('./util/database');

const user= require('./models/user');
const expense= require('./models/expense');
const order= require('./models/order');

const userroute= require('./routes/user');
const expenseroute= require('./routes/expense');
const orderroute= require('./routes/order');
const premiumfeatureroute= require('./routes/premiumFeature');








const app = express();
app.use(cors());


app.use(bp.json());

 

app.use('/user', userroute );
app.use('/expense', expenseroute );
app.use('/order', orderroute);
app.use('/premiumFeature', premiumfeatureroute);





user.hasMany(expense);
expense.belongsTo(user);


user.hasMany(order);
order.belongsTo(user);




sequelize.sync()
.then(()=>{
    app.listen(3000);
console.log("listening");

})
.catch((err)=>{
    console.log("sequelize sync error in app.js", err);
    
})



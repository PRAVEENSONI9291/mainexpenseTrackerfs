const express= require('express');



const order= require('../models/order');
const user= require('../models/user');

// const createOrder= require('../services/cashfreeservice');
const cashfreeService = require('../services/cashfreeservice');




exports.createCashfreeOrder = async (req, res) => {

    



  try {

    let buyPremiumOrder= await order.create({id: "order_" + Date.now(), status:'pending', userId:req.user.id});
    console.log(buyPremiumOrder.userId);

    
  const orderId= (buyPremiumOrder.id);
  const orderAmount= 500;
  const customer= (buyPremiumOrder.userId).toString();








    const result = await cashfreeService.createOrder({
      orderId,
      orderAmount,
      customer,
    });

    res.status(200).json({
      success: true,
      order: result,
    });
  } catch (err) {
    console.error('Error in /order route:', err)
    res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};




exports.updateCashfreeOrder = async (req, res) => {

  // console.log( req.headers.authorization);
  console.log("bodddddddddddddddy",req.body);
  console.log(req.body.orderId);
  
  

  console.log("user is",req.user);

  try {

   const Order = await order.findOne({ where: { id: req.body.orderId } });
   const orderToUpdate= await Order.update(
    {status: "success"},
    {where:{id:Order.id}}
   )
   console.log("userrrrrrrrrrrrrrr iddddddddd", orderToUpdate.id);
   

if (!Order) {
  return res.status(404).json({ message: "Order not found" });
}

// Step 2: Use userId from order to update user

const updateUserToPremium = await user.update(
  { isPremium: true },
  { where: { id: req.user.id } }
);
    


    
  } catch (error) {
    console.log(error);
    
    
  }
  
  
}

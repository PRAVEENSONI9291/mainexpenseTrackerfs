const express= require('express');



const order= require('../models/order');

// const createOrder= require('../services/cashfreeservice');
const cashfreeService = require('../services/cashfreeservice');




exports.createCashfreeOrder = async (req, res) => {

    



  try {

    let buyPremiumOrder= await order.create({status:'pending', userId:req.user});
    console.log(buyPremiumOrder.userId);

    
  const orderId= (buyPremiumOrder.id).toString();
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
    res.status(500).json({
      success: false,
      message: "Failed to create order",
    });
  }
};





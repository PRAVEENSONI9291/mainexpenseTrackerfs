const express= require('express');


const router= express.Router();
const authenticate = require('../middlewares/authenticate');
const orderController= require('../controllers/order');





router.post('/createOrder',authenticate, orderController.createCashfreeOrder);
router.post('/updateorderstatus',authenticate, orderController.updateCashfreeOrder);





module.exports= router;
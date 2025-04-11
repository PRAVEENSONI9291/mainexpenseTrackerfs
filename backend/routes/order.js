const express= require('express');


const router= express.Router();
const authenticate = require('../middlewares/authenticate');
const orderController= require('../controllers/order');





router.get('/',authenticate, orderController.createCashfreeOrder);




module.exports= router;
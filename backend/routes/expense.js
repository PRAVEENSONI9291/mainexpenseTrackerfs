const express= require('express');

const router= express.Router();
const expenseController= require('../controllers/expense');

const authenticate= require('../middlewares/authenticate');


router.post('/',authenticate,expenseController.addExpense );

router.get('/', authenticate  ,expenseController.getExpense)

router.delete('/', authenticate,expenseController.deleteExpense)




module.exports= router;
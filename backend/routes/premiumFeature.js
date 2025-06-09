const express= require('express');

const router= express.Router();
const authenticate = require('../middlewares/authenticate');
const premiumFeatureController= require('../controllers/premiumFeature');


router.get('/', authenticate, premiumFeatureController.leaderboard);



module.exports=router;
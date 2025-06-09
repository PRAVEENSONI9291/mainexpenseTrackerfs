const express= require('express');

const router= express.Router();

const userController= require('../controllers/user');
const authenticate= require('../middlewares/authenticate');







router.post('/signup', userController.signup );


router.post('/login', userController.login);

router.get('/isPremium', authenticate, userController.isPremium);

module.exports = router;
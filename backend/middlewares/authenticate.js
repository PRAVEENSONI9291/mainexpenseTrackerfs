const jwt= require('jsonwebtoken');

const user= require('../models/user');

const authenticate=  async(req,res,next)=>{

    // console.log("auth middleware",req.headers.authorization);

    const token = req.headers.authorization;

    const userid= jwt.verify(token, 'Helloworld' );
    // console.log("id is", userid);   

    try {

        await user.findByPk(userid.id);
        req.user= userid.id;
        
    } catch (error) {

        console.log("error while authenticating", error);
        
        
    }

    

    




    next();
};



module.exports= authenticate;
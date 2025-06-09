const jwt= require('jsonwebtoken');

const user= require('../models/user');

const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
    console.log("checking token", token);
    
    const decoded = jwt.verify(token, 'Helloworld');

    const existingUser = await user.findByPk(decoded.id);
    if (!existingUser) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = existingUser; // ✅ Attach full user instance
    next();
  } catch (error) {
    console.log("Error while authenticating", error);
    return res.status(403).json({ message: 'Authentication failed' });
  }
};




module.exports= authenticate;
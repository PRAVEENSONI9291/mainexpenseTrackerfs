const user= require('../models/user');

const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');


const signup= async(req, res)=>{
    const {name, email, password}= req.body;

    try {
        console.log(req.body);

        let ifUserAvailable= await user.findOne({where:{email:email}});
        if(ifUserAvailable){
            res.send(false);
        }
        else {

            bcrypt.hash(password, 10, async (err, hash) => {
                console.log(err);


                await user.create({ name, email, password: hash });
                res.status(201).json({ message: 'successfully created new user' })
            })

        }
        
    } catch (error) {
        console.log("error while creating new user in database", error);
        res.status(500).json(error)
        
    }
  
    

};



const login= async (req, res) => {
    const { email, password } = req.body;

    try {
        function jwtCreateToken(id){
         return jwt.sign({id:id}, 'Helloworld')   

        }
        const isEmailPresent = await user.findOne({ where: { email } });

        if (!isEmailPresent) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, isEmailPresent.password);

        if (isMatch) {
            const token = jwtCreateToken(isEmailPresent.id); // If you want JWT
            return res.status(200).json({ message: "Login successful" , token:token}, );
        } else {
            return res.status(401).json({ message: "User not authorized" });
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports= {signup, login};
const express= require('express');
const expense= require('../models/expense');


const addExpense= async(req, res)=>{
    // console.log(req.body);
    console.log("expense added by user", req.user.id);

    let userId= req.user.id;
    
    const {amount, description, category}= req.body;

    try {

        await expense.create({amount:amount, description:description, category:category, userId: userId });
        return res.status(200).json({message: "expense added successfully"})

        
    } catch (error) {
        console.log("error while adding expense", error);
        return res.status(500).json({message:"error while adding expense"});
        
        
    }
    
    
};


const getExpense= async(req, res)=>{
    // console.log("user id after authentication is", req.user);
    const token = req.user.id;
    

    try {

        let listOfExpenses= await expense.findAll({where:{userId:token}});
        res.status(200).send(listOfExpenses);
        
        
    } catch (error) {
        console.log("error while getting expense ", error);
        return res.status(500).json({message:"error in get expenses"})
        
        
    }

};



const deleteExpense= async (req,res)=>{
    let element= req.query.id.split('-');
    let idToDelete= element[1];
    
    try {

        await expense.destroy({where:{id:idToDelete}});
        return res.status(200).json({message:"item deleted successfully"});
        
    } catch (error) {
        console.log("error while deleting element");
        

        return res.status(500).json({message:"error while deleting element"})
        
    }
    

    
}


module.exports= {addExpense, getExpense, deleteExpense};



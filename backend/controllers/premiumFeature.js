const express= require('express');
const expense= require('../models/expense');
const user= require('../models/user');


const leaderboard = async (req, res) => {
  try {

  const results = await expense.findAll({
  attributes: ['userId', 'amount'],
  include: [{
    model: user,
    attributes: ['name']
  }]
});

// To see result:
// expensesWithNames.forEach(item => {
//   console.log({
//     userId: item.userId,
//     amount: item.amount,
//     name: item.User.name
//   });
// });
    



    res.status(200).json(results ); // ✅ send response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' }); // ✅ error response
  }
};


module.exports= {leaderboard};
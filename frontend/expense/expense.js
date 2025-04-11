let expenseForm= document.getElementById('expenseForm');
let ul= document.getElementById('expenseList');

const url= 'http://localhost:3000/expense';
const token= localStorage.getItem('token');

window.addEventListener('load', fetchData);
ul.addEventListener('click', deleteItem);






expenseForm.addEventListener("submit", addExpense);

async function deleteItem(e){
    // console.log(e.target.id);

    try {
    let deleteItemResp= await axios.delete(url, {
        params:{id:e.target.id},
        headers:{Authorization:token}
    });
    location.reload();

        
    } catch (error) {
        if(error.response)
        {
            console.log(error.response.data.message);
            
        }
        
    }    

}




async function addExpense(e){
            e.preventDefault();
            

            let expenseAmount= document.getElementById('expenseAmount').value;
            let description= document.getElementById('description').value;
            let category= document.getElementById('category').value;

            let expenseObj= {
                amount: expenseAmount,
                description:description,
                category:category
            }

            try {

                await axios.post(url, expenseObj,{
                    headers: { Authorization: token }, // Add the token here
                  });
                location.reload();

                
            } catch (error) {
                console.log(error);
                
                if(error.response)
                {
                    alert(error.response.data.message);
                }
                
            }

            
};



async function fetchData(e){
    e.preventDefault();


    try {

        let expenseListFromDatabase= await axios.get(url,{
            headers: { Authorization: token }, // Add the token here
          })
        // console.log(expenseListFromDatabase);
        printData(expenseListFromDatabase.data);
        
        
    } catch (error) {
        if(error.response)
        {
            console.log(error.response.data.message);
            
        }
    }

};


async function printData(data){

    data.forEach(expense=>{

        let item= document.createElement('li');
        item.id= expense.id;
        item.className= "expenseitems";

        item.innerHTML=  ` ${expense.amount} - ${expense.description} - ${expense.category}  <button id=btn-${expense.id} 
         type="button">Delete</button>`
        

        ul.appendChild(item)
        
    })
}
let loginForm= document.getElementById('loginForm');

const url= 'http://localhost:3000/user';








loginForm.addEventListener("submit", login);


async function login(e){
    e.preventDefault();
    
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;

    let loginObj={
        email: email,
        password:password
    }

 try {
    let loginResp= await axios.post(`${url}/login`, loginObj );
    
        alert(loginResp.data.message);
        console.log(loginResp.data.token);

        localStorage.setItem('token',loginResp.data.token);
        
        window.location.href= '../expense/expense.html';


    
   

    
 } catch (error) {
    console.log(error.response);
    

    if(error.response)
    {
        alert(error.response.data.message)
    }
    
    
    
 }
    

    
    
    
}
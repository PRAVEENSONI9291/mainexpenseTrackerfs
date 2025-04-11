
let signUpForm= document.getElementById('signupForm');

const url= 'http://localhost:3000/user';





signUpForm.addEventListener('submit', signup);


async function signup(e){
    e.preventDefault()

    let userName= document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;


    let newUserData= {
        name: userName,
        email: email,
        password:password
    }

    // console.log(newUserData);

    let signupResp= await axios.post(`${url}/signup`, newUserData);
    if(signupResp.data===false)
        {
           alert("user already exists")
           
        }
        else {
         // alert(resp.message)
         alert(signupResp.data.message);
         
           window.location.href= '../login/login.html';
           
        }
    


    
    

}


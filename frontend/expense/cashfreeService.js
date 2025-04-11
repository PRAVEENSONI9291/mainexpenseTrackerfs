const cashfree= Cashfree({
    mode:'sandbox'
});

const buyPremium= document.getElementById('BuyPremiumButton');
const premiumUrl= 'http://localhost:3000/order';
const token1= localStorage.getItem('token');


buyPremium.addEventListener('click', async()=>{
    
    try {

        const response= await axios.get(premiumUrl,{
            headers:{Authorization:token1}
        });
        console.log(response.data.order.payment_session_id);


        const paymentSessionId= response.data.order.payment_session_id;

        let checkOutOptions={
            paymentSessionId: paymentSessionId,


            redirectTarget: "_modal"
        };

        // start the checkout process

        const result= await cashfree.checkout(checkOutOptions);
        

        
    } catch (error) {
        console.log("error", error);
        
        
    };
    
})
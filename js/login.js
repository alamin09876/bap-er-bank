
document.getElementById('btn-submit').addEventListener('click', function (){

    const userInput = document.getElementById('user-input')
    const email = userInput.value;   
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value;
    
    if(email == 'alamin@gmail.com' && password == "alamin"){
        console.log("Valid User");
        window.location.href='bank.html';
    }
    else{
        console.log("Invalid User");
    }
})
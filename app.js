const loginInput=document.querySelector("#login-form input"); 
const loginbutton=document.querySelector("#login-form button");


function onLoginClick(){
    const username =loginInput.value;
    console.log(username);


}
loginbutton.addEventListener("click",onLoginClick)
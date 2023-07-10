const age =parseInt(prompt("how old are you?"));

console.log(isNaN(age));

if (isNaN(age)){
    /// condition ===ture
    console.log("Please write a number");
}else{
    //condition===false
    console.log("Thank you for writing your age");
}
const age =parseInt(prompt("how old are you?"));


if (isNaN(age) || age <0){
    /// condition ===ture
    console.log("Please write a real positive number");
}else if(age<18){
    //condition===false
    console.log("You ate too young.");
}else if(age>=18 &&age<=50){
    console.log("You can drink");
}else if (age>50 && age<=80){
    console.log("You should exercise");
}else if(age ==100){
    console.log("wow you are wise");
}else if (age>80){
    console.log(" You can do whatever younwant.");
}


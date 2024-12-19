let age =18;

let isCitizen = true;

let isRegistered = false;

if(age>=18 && isCitizen && isRegistered){
    console.log("Eligible to vote");
}

else if(age<18 && !isCitizen && !isRegistered){
    console.log("Not Eligible");
}

else if(age>=18 && !isCitizen){
    console.log("They are not Eligible due to citizenship");

}
else{
    console.log("They are not eligible due to registration status");
}
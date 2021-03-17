var age = 27;
var isSubscribed = false; 

if(age < 18 && isSubscribed !== true){
    console.log("The user is younger than 18 and is not subscribed");
} else if (age < 18 && isSubscribed === true){
    console.log("The user is younger than 18 and is subscribed");
} else if (age >= 18 && isSubscribed ===true){
    console.log("The user is 18 and older and is subscribed");
} else if (age >= 18 && isSubscribed !== true){
    console.log("The user is 18 and older and is not subscribed");
} else{
console.log("Please try again");}














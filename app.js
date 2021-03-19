//Collaborated with Shawn

// The users' ages and their respective subscription statuses (17 yr old = true; 21 yr old = false, etc.)
var age = [17, 21, 25, 28, 40, 15];
var isSubscribed = [true, false, true, false, true, true];

var ageLength = age.length;
// This counts how many items are in the array 'age' above

var myName = "Britt";
// counter = 0 means it starts the loop from the first item in the array (meaning, 17 and true) (this variable is then called in [] in the conditional statements below)
// counter < ageLength means when the variable 'counter' is less than the number of items in 'age' array, so run the loop body that many times (but not more than the # of items in the array)
// the loop will run through the loop body the first time starting from place '0' (17, true) until it finds the correct conditional statement that applies to the items in both arrays, then will move onto the next item in the array ( counter ('0') +1)

for (var counter = 0; counter < ageLength; counter = counter + 1) {
  if (age[counter] < 18 && isSubscribed[counter] === false) {
    console.log("The user is younger than 18 and is not subscribed");
  } else if (age[counter] < 18 && isSubscribed[counter] === true) {
    console.log("The user is younger than 18 and is subscribed");
  } else if (age[counter] >= 18 && isSubscribed[counter] === true) {
    console.log("The user is 18 or older and is subscribed");
  } else if (age[counter] >= 18 && isSubscribed[counter] === false) {
    console.log("The user is 18 or older and is not subscribed");
  } else {
    console.log("Please try again");
  }
}

// This is my stuff from last assignment but I want to keep it here for myself ok thx :)
// if (age === 18 && isSubscribed !== true) {
//   console.log("The user is younger than 18 and is not subscribed");
// } else if (age < 18 && isSubscribed) {
//   console.log("The user is younger than 18 and is subscribed");
// } else if (age >= 18 && isSubscribed) {
//   console.log("The user is 18 or older and is subscribed");
// } else if (age >= 18 && isSubscribed !== true) {
//   console.log("The user is 18 or older and is not subscribed");
// } else {
//   console.log("Please try again");
// }

// ADD COMMENTS BEFORE SUBMITTING

// 9b
// put the else if code inside the body of your loop
// modify if/else status so it prints out the status for each user in your arrays
// Bonus: on last slide we talked about - make it dynamic based on the length of your array

// 9C
// makeup 10 tweets
// looop that iterates through the tweets (the array)
// bonus: try to figure out what a javascript object is and create that instead of an array of strings - each tweet is an object so make 10 of them

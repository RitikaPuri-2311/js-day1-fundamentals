"use strict"
//function is basically reusable part of code

// Function Declaration
//Key thing — declarations are hoisted meaning you can call them even before they are defined:
/*
console.log(greet("Ritika")); // "Hello Ritika!"

function greet(name) {
  return `Hello ${name}!`;
}

// Function Expression — stored in a variable
//Key thing — expressions are NOT hoisted, must define before calling:

const wish = function(name) {
  return `Hello ${name}!`;
};
console.log(wish("Ritika")); // "Hello Ritika!"

// Arrow function : shorter way to write a function

const gesture = (name) => `Hello ${name}!`;
console.log(gesture("John"))

// Default Parameters
function welcome(name = "Guest") {
  return `welcome ${name}`;
}
console.log(welcome()) // takes set default value if no value is passed

//Rest
const fn = (...numbers) => {
  //console.log(numbers);// will show[1,2,3,4] undefined because function returns nothing
return numbers;
};
console.log(fn(1,2,3,4));

const sum = (...nums) => {
  return nums[0] + nums[1] + nums[2]; // returns sum
  return nums //return array
};

console.log(sum(10, 20, 30));

//spread operator : opens the array
 const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

console.log(...arr);
console.log(newArr); */

/*const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];

console.log(combined);*/

//higher order function : function that takes another function as input
/*const morningRoutine = (activity) => {
  console.log("Good morning!");
  activity();
  console.log("Done!");
}

morningRoutine(() => console.log("Brush teeth"));
// "Good morning!"
// "Brush teeth "
// "Done!"

morningRoutine(() => console.log("Exercise"));
// "Good morning!"
// "Exercise "
// "Done!" */


//returns a function
const greeter = (language) => {
  return (name) => {
    if(language === "hindi") {
      console.log(`Namaste ${name}! `);
    } else {
      console.log(`Hello ${name}!`);
    }
  }
}

const hindiGreet = greeter("hindi");
const englishGreet = greeter("english");

hindiGreet("Ritika");  // "Namaste Ritika! "
englishGreet("Ritika"); // "Hello Ritika!"

//IIFE
(function() {
  console.log("Hello");
})();
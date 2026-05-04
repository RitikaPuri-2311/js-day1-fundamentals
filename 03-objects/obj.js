"use strict"
//Creating an object
// An object is just a collection of related data
/*const student = {
  name: "Ritika",
  age: 22,
  city: "Indore",
  isActive: true
};
console.log(student.name); // dot is commonly used 
const user = {
  "full name": "Ritika Puri"
};

console.log(user["full name"]); // when key has some sort of space bracket notation is used
*/
//task 1
/*let user = {};
user.name = "john";
user.surname = "Smith";
console.log(user);
user.name = "pete";
console.log(user);
delete user.name;
console.log(user);

//task 2
let schedule = {};
function isEmpty(object) {
for (let property in object) {
  return false;
  }
  return true;
 }
 console.log(isEmpty(schedule)); */

//Mutation : changing ojects
/*const user = {
  name: "Ritika",
  age: 22
};

console.log("Original:", user);

user.age = 23;
user.city = "Indore";
delete user.name;

console.log("After mutation:", user);
*/
// Shorthand Properties
/*const name = "Aman";
const age = 25;

const person = { name, age };
console.log("Shorthand Object:", person);

// Computed Keys
const key = "email";

const dynamicUser = {
  [key]: "ritika@gmail.com"
};

console.log("Computed Key Object:", dynamicUser);
*/
//Destructing 

const student = {
  name: "Ritika",
  age: 22,
  city: "Indore",
};
 
// Old way 
const studentName1 = student.name;
const studentAge1 = student.age;
 
// Destructuring — 
const { name: sName, age: sAge, city } = student;
 
console.log(sName); // "Ritika"
console.log(sAge);  // 22
console.log(city);  // "Indore"

// Nested Destructing

const profile = {
  name: "Ritika",
  address: {
    city: "Indore",
    pin: 452001,
  },
};
 
// Go inside the nested object
const {
  name: profileName,
  address: { city: profileCity, pin },
} = profile;
 
console.log(profileName); // "Ritika"
console.log(profileCity); // "Indore"
console.log(pin);         // 452001
 
 
//RENAME DURING DESTRUCTURING
 
const person = {
  name: "Ritika",
  age: 22,
};
 
// Rename name → userName, age → userAge
const { name: userName, age: userAge } = person;
 
console.log(userName); // "Ritika"
console.log(userAge);  // 22

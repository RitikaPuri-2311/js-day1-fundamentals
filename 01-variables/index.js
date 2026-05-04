"use strict" // treat all js code a newer version
//var name = "Ritika" // name and NAME are diff
// preffered not to use var because of its issue in Block scope(leaks out of the block) anf functional scope

//let score = 90
//value can change

const city = "Indore"
//value cant be changed

//console.log(city)
//it prints a single value

//console.table([name,score,city]);
//use to print multiple values

/* The Primitive types */
const a = "Riti"
const b = 22;
const c = true;
const d = null;
const e = Symbol("id");
const g = 1234567890123456789n;

//console.log(typeof true);
//console.table([typeof a,typeof b,typeof c,typeof d,typeof e,typeof g]);

/* diff between null and undefined */
let x; // will show undeifned becaue we never gave it a value
let y = null; // will show null because we se it "empty"/ stadalone value

//console.log(x)
//console.log(y)

//alert(score) // we are using nodejs not browser

/* Type Conversion */

let marks= "25"
//console.log(marks)
//console.log(typeof marks)

let valueInNumber= Number(marks)
//console.log(typeof valueInNumber)

// "25" -> 25
// "25abc" -> NaN
// true -> 1 ; false -> 0

let User= "Puri"

let booleanIsUser= Boolean(User)
//console.log(booleanIsUser);

// 1-> true
// 0 -> false / "" -> false
// "Puri" -> true

//**************************operations************************ */
// + sign with a string = joins (concatenation)
/*console.log("5" + 5);      // "55" ← NOT 10!
console.log("5" + 5 + 2);  // "552"
console.log(5 + 5 + "2");  // "102" ← order matters!

// - sign always converts to number
console.log("10" - 5);     // 5 
console.log("10" * 2);     // 20 

// == (loose) vs === (strict)
console.log(0 == false);   // true  ← DANGEROUS
console.log("" == false);  // true  ← DANGEROUS
console.log(0 === false);  // false always use this
console.log("5" === 5);    // false */

//*******************************Template literal******************* */
const name = "Ritika";
const score = 95;
const subject = "JavaScript";

// Old messy way
console.log("Hello " + name + ", your score in " + subject + " is " + score);

// Template literal ✅
console.log(`Hello ${name}, your score in ${subject} is ${score}`);

// Expression inside ${}
console.log(`Double your score: ${score * 2}`);
console.log(`Are you passing? ${score > 40 ? "Yes!" : "No"}`);

// Multi-line string
const message = `
  Name: ${name}
  Score: ${score}
  Subject: ${subject}
`;
console.log(message);

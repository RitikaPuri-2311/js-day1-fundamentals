"use strict"
const nums = [1, 2, 3, 4, 5];

// map → transform each element
const doubled = nums.map(n => n * 2);
console.log("map:", doubled); // Use when you want to change every element

//task 1
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

 let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);


// filter → condition
/*const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens); // Use when you want only some elements (condition)

// reduce → single value
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce:", sum); // Use when you want one final result
//real life ex: when calculating cart item price while shooping

// forEach → just loop (no return)
nums.forEach(n => console.log("forEach:", n)); // Use when you just want to loop / print

// find → first match
const firstEven = nums.find(n => n % 2 === 0);
console.log("find:", firstEven); // Use when you want first matching value

// findIndex → index of match
const index = nums.findIndex(n => n > 3);
console.log("findIndex:", index); // Use when you want position (index)

// some → any true?
const hasEven = nums.some(n => n % 2 === 0);
console.log("some:", hasEven); // Use when checking “at least one?”

// every → all true?
const allPositive = nums.every(n => n > 0);
console.log("every:", allPositive); // Use when checking “all true?”

// flat → flatten array
const nested = [1, [2, 3], [4]];
console.log("flat:", nested.flat()); // Use when array is nested

// flatMap → map + flat
const words = ["hi", "hello"];
const letters = words.flatMap(word => word.split(""));
console.log("flatMap:", letters); //  Use when you need map + flatten together

// chaining methods
const result = nums
  .filter(n => n > 2)
  .map(n => n * 10);

console.log("chaining:", result); // Using multiple methods one after another

// spread with arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log("spread:", combined);

// array destructuring
const [a, b, c ,d] = nums;
console.log("destructuring:", a, b, c, d); */
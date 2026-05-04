import { add, multiply } from "./math.js";
import user from "./user.js";
import { greet } from "./greet.js";

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(2, 3));

console.log("User:", user);
console.log(greet(user.name));

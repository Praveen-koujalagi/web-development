console.log("Hello, World!");

let a = 5;
let b = 10;
let sum = a + b;
console.log("The sum is: " + sum);

// Template literals
console.log(`The sum of ${a} and ${b} is: ${sum}`);


   // alerts & prompts
// let userName = prompt("What is your name?");
// alert(`Hello, ${userName}! Welcome to the JavaScript world!`);

// alert("This is an alert message!");

console.error("This is an error message!");
console.warn("This is a warning message!");

// string methods in js
let str = "Hello, JavaScript!";
console.log(str.length); // 21
console.log(str.toUpperCase()); // "HELLO, JAVASCRIPT!"
console.log(str.substring(0, 5)); // "Hello"

// number methods in js
let num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(Math.round(num)); // 123

// boolean values in js
let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false

// arrays in js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

// nested arrays in js
let nestedArray = [
    ["apple", "banana"],
    ["orange", "grape"]
];

// loops in nested arrays
for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        console.log(nestedArray[i][j]);
    }
}

// for of loops in js
for (let fruit of fruits) {
    console.log(fruit);
}

// nested for of loops in js
for (let subArray of nestedArray) {
    for (let item of subArray) {
        console.log(item);
    }
} 

// object literals in js
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "coding"]
};

// ex of object literal " twitter or thread post"
const socialMediaPost = {
    username: "john_doe",
    content: "Learning JavaScript is fun!",
    likes: 100,
    reposts : 25,
    tags: ["JavaScript", "Coding", "Learning"],
    comments: [
        { user: "jane_smith", comment: "I agree!" },
        { user: "bob_johnson", comment: "JavaScript is the best!" }
    ]
};

// Math object in js
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8

// funtions in js
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// function expression in js
const add = function(x, y) {
    return x + y;
};  
console.log(add(5, 10)); // 15


// high order functions in js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
}); 
console.log(doubled); // [2, 4, 6, 8, 10]

// Methods in js
const personMethods = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

// Arrow functions in js
const multiply = (x, y) => x * y;

// this keyword in js
const obj = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// implicit return in arrow functions
const square = x => x * x;

// setTimeout in js
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

// setInterval in js
setInterval(() => {
    console.log("This message is displayed every 3 seconds");
}, 3000);

// this keyword in arrow functions
const arrowObj = {
    name: "Charlie",
    greet: () => {
        console.log(`Hello, my name is ${arrowObj.name}`);
    }
};
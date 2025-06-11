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

// array methods in js
const numbersArray = [1, 2, 3, 4, 5];   
const squaredNumbers = numbersArray.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]
// filter method in js
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4] 
// reduce method in js
const sumOfNumbers = numbersArray.reduce((accumulator, current) => accumulator + current, 0);
console.log(sumOfNumbers); // 15    
// find method in js
const firstEvenNumber = numbersArray.find(num => num % 2 === 0);
console.log(firstEvenNumber); // 2
// forEach method in js
numbersArray.forEach(num => {
    console.log(num);
});
// every method in js   
const allEven = numbersArray.every(num => num % 2 === 0);
console.log(allEven); // false

// default parameters in js
function multiply(a, b = 1) {
    return a * b;
}

// spread operator in js
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
// spread with arrays literals
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// spread with objects literals
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

// rest in js
function logArguments(...args) {
    console.log(args);
}   
logArguments(1, 2, 3, 4); // [1, 2, 3, 4]

// destructuring in js
const personDetails = {
    name: "David",
    age: 28,
    city: "New York"
};
const { name, age, city } = personDetails;
console.log(name); // "David"   
console.log(age); // 28
console.log(city); // "New York"    
// destructuring with arrays
const numbersList = [10, 20, 30];   
const [first, second, third] = numbersList;
console.log(first); // 10
console.log(second); // 20      
console.log(third); // 30

// event listeners in js
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        alert("Button clicked!");
    });
});

// double click event listener
document.addEventListener("DOMContentLoaded", () => {
    const doubleClickButton = document.getElementById("doubleClickButton");
    doubleClickButton.addEventListener("dblclick", () => {
        alert("Button double-clicked!");
    });
});



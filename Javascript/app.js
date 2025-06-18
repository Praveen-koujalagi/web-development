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

// event listerners for elements
document.addEventListener("DOMContentLoaded", () => {
    const hoverElement = document.getElementById("hoverElement");
    hoverElement.addEventListener("mouseover", () => {
        console.log("Mouse over the element!");
    });
    
    hoverElement.addEventListener("mouseout", () => {
        console.log("Mouse out of the element!");
    });
}); 

// this in event listeners
document.addEventListener("DOMContentLoaded", () => {
    const buttonWithThis = document.getElementById("buttonWithThis");
    buttonWithThis.addEventListener("click", function() {
        console.log(`Button clicked! This refers to: ${this}`);
    });
});

// keyboard events in js
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        console.log(`Key pressed: ${event.key}`);
    });
    
    document.addEventListener("keyup", (event) => {
        console.log(`Key released: ${event.key}`);
    });
});

// form submission event in js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        const inputValue = document.getElementById("textInput").value;
        console.log(`Form submitted! Input value: ${inputValue}`);
    });
});

// extracting values from form inputs
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission
        const inputValue = document.getElementById("textInput").value;
        console.log(`Form submitted! Input value: ${inputValue}`);
    });
});

// event bubbling in js
document.addEventListener("DOMContentLoaded", () => {
    const outerDiv = document.getElementById("outerDiv");
    const innerDiv = document.getElementById("innerDiv");
    
    outerDiv.addEventListener("click", () => {
        console.log("Outer div clicked!");
    });
    
    innerDiv.addEventListener("click", (event) => {
        console.log("Inner div clicked!");
        event.stopPropagation(); // Prevents the event from bubbling up to the outer div
    });
});


// callstack in js
function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}
function thirdFunction() {
    console.log("This is the third function.");
}

// breakpoints in js
function debugFunction() {
    console.log("This is a debug function.");
    // Set a breakpoint here to inspect the call stack
    console.log("Debugging...");
}

// js is single-threaded
console.log("JavaScript is single-threaded, meaning it executes one task at a time in a single sequence.");

// synchronous programming in js example
function synchronousExample() {
    console.log("Task 1: Start");
    console.log("Task 1: End");
    console.log("Task 2: Start");
    console.log("Task 2: End");
}

// asynchronous programming in js example
function asynchronousExample() {
    console.log("Task 1: Start");
    setTimeout(() => {
        console.log("Task 1: End (after 2 seconds)");
    }, 2000);
    console.log("Task 2: Start");
    console.log("Task 2: End");
}

// callback hell in js   // callback hell is a situation where multiple nested callbacks make the code hard to read and maintain.
function callbackHellExample() {
    firstTask(() => {
        secondTask(() => {
            thirdTask(() => {
                console.log("All tasks completed!");
            });
        });
    });
}

// Promises in js give an example
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("First task completed");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Second task completed");
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Third task completed");
            resolve();
        }, 1000);
    });
}

// .then & .catch in Promises
function executeWithPromises() {
    firstTask()
        .then(() => secondTask())
        .then(() => thirdTask())
        .then(() => console.log("All tasks completed using Promises!"))
        .catch((error) => console.error("An error occurred:", error));
}

// promis chaining in js means using the .then method to chain multiple asynchronous operations together, allowing each operation to wait for the previous one to complete before executing.
// Chained Promises example
function executeChainedPromises() {
    firstTask()
        .then(() => {
            return secondTask();
        })
        .then(() => {
            return thirdTask();
        })
        .then(() => {
            console.log("All tasks completed using chained Promises!");
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

// results & errors in Promises
function executeWithResultsAndErrors() {
    firstTask()
        .then((result) => {
            console.log(result); // "First task completed"
            return secondTask();
        })
        .then((result) => {
            console.log(result); // "Second task completed"
            return thirdTask();
        })
        .then((result) => {
            console.log(result); // "Third task completed"
            console.log("All tasks completed using Promises with results!");
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

// Using Promises to handle asynchronous tasks
async function executeTasks() {
    await firstTask();
    await secondTask();
    await thirdTask();
    console.log("All tasks completed using Promises!");
}

// Using async/await to handle asynchronous tasks
async function asyncAwaitExample() {
    console.log("Starting tasks...");
    await firstTask();
    await secondTask();
    await thirdTask();
    console.log("All tasks completed using async/await!");
}   

// async functions in js explain how to write asynchronous code in a more readable way, allowing you to use the await keyword to pause execution until a Promise is resolved or rejected.
// Fetching data using async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// async keyword in js explains that the function will return a Promise and allows the use of await within the function to pause execution until the Promise is resolved or rejected.
// async function example
async function asyncFunctionExample() {
    return "This is an async function example.";
}

// async function with arrow function
const asyncArrowFunctionExample = async () => {
    return "This is an async arrow function example.";
};

// await keyword in js allows you to pause the execution of an async function until a Promise is resolved or rejected, making it easier to work with asynchronous code.
// await keyword example
async function awaitExample() {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is the result after 2 seconds.");
        }, 2000);
    });
    console.log(result);
}

// async functions in js are functions that return a Promise and allow the use of the await keyword to pause execution until the Promise is resolved or rejected.
// async function example
async function asyncFunctionExample() {
    return "This is an async function example.";
}

// api calls in js allow you to make requests to external services and retrieve data, often using the Fetch API or libraries like Axios.
// Fetch API example 
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
// open source api example
// hoppscotch
// hoppscotch is an open-source API development tool that allows developers to test APIs, view responses, and manage API requests in a user-friendly interface.
// postman
// Postman is a widely used open-source API development tool that provides a user-friendly interface for testing APIs, managing requests, and viewing responses.

// json methods in js provide functions to parse and stringify JSON data, allowing developers to easily convert between JavaScript objects and JSON strings.
// JSON.parse() converts a JSON string into a JavaScript object.
function jsonParseExample() {
    const jsonString = '{"name": "Alice", "age": 25}';
    const jsonObject = JSON.parse(jsonString);
    console.log(jsonObject); // { name: 'Alice', age: 25 }
}

// JSON.stringify() converts a JavaScript object into a JSON string.
function jsonStringifyExample() {
    const jsonObject = { name: "Bob", age: 30 };
    const jsonString = JSON.stringify(jsonObject);
    console.log(jsonString); // '{"name":"Bob","age":30}'
}

// API testing tools in js are tools that help developers test and debug APIs by sending requests, viewing responses, and checking the functionality of endpoints.
// api testing tools
// Postman is a popular API testing tool that allows you to send requests to APIs, view responses, and test endpoints.
// It provides a user-friendly interface for making GET, POST, PUT, DELETE requests and supports various authentication methods.    

// ajax in js is a technique for making asynchronous HTTP requests to retrieve or send data to a server without refreshing the page.
// Ajax example using XMLHttpRequest
function ajaxExample() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error("Error fetching data:", xhr.statusText);
        }
    };
    xhr.send();
}

// http verbs in js refer to the different methods used to interact with web servers, such as GET, POST, PUT, DELETE, etc.
// HTTP verbs example   
function httpVerbsExample() {
    // GET request
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log("GET request data:", data))
        .catch(error => console.error("Error in GET request:", error));

    // POST request
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "New Post", body: "This is a new post." })
    })
        .then(response => response.json())
        .then(data => console.log("POST request data:", data))
        .catch(error => console.error("Error in POST request:", error));
}
// PUT request
function putRequestExample() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: 1, title: "Updated Post", body: "This post has been updated." })
    })
        .then(response => response.json())
        .then(data => console.log("PUT request data:", data))
        .catch(error => console.error("Error in PUT request:", error));
}
// DELETE request
function deleteRequestExample() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                console.log("DELETE request successful");
            } else {
                console.error("Error in DELETE request:", response.statusText);
            }
        })
        .catch(error => console.error("Error in DELETE request:", error));
}
// etc

// status codes in js refer to the numerical codes returned by a server in response to an HTTP request, indicating the status of the request.
// Common HTTP status codes
const statusCodes = {
    200: "OK - The request was successful.",
    201: "Created - The request was successful and a resource was created.",
    204: "No Content - The request was successful but there is no content to return.",
    400: "Bad Request - The server could not understand the request due to invalid syntax.",
    401: "Unauthorized - The client must authenticate itself to get the requested response.",
    403: "Forbidden - The client does not have access rights to the content.",
    404: "Not Found - The server can not find the requested resource.",
    500: "Internal Server Error - The server has encountered a situation it doesn't know how to handle."
};

// adding infromation to the urls
function addQueryParamsToUrl(url, params) {
    const queryString = new URLSearchParams(params).toString();
    return `${url}?${queryString}`;
}
// Example usage
const baseUrl = "https://api.example.com/data";
const params = { userId: 1, sortBy: "name" };
const fullUrl = addQueryParamsToUrl(baseUrl, params);
console.log(fullUrl); // Output: "https://api.example.com/data?userId=1&sortBy=name"


// http headers in js are key-value pairs sent in the HTTP request or response, providing additional information about the request or response.
// Common HTTP headers
const httpHeaders = {
    "Content-Type": "application/json",
    "Authorization": "Bearer token",
    "Accept": "application/json",
    "User-Agent": "Mozilla/5.0",
    "Accept": "text/plain",
    "Cache-Control": "no-cache"
};

// fetch API in js is a modern way to make HTTP requests in JavaScript, providing a more powerful and flexible feature set compared to the older XMLHttpRequest.
// Fetch API example    
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("Error fetching data:", error));
}

// using sync/await with fetch API
async function fetchDataAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Axios in js is a popular JavaScript library for making HTTP requests, providing a simple and easy-to-use API for handling requests and responses.
// Axios example
function fetchDataWithAxios() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error fetching data with Axios:", error);
        });
}
// Using Axios with async/await
async function fetchDataWithAxiosAsync() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data with Axios:", error);
    }
}

// link html & axios 
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> give example
// Using Axios in HTML with a button click
document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    fetchButton.addEventListener("click", () => {
        fetchDataWithAxios();
    });
}); 
// HTML button to trigger Axios request
// <button id="fetchButton">Fetch Data with Axios</button>
// Using Axios in HTML with async/await
document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButtonAsync");
    fetchButton.addEventListener("click", async () => {
        await fetchDataWithAxiosAsync();
    });
});

// take image from the dog api and display it in the html using axios
document.addEventListener("DOMContentLoaded", () => {
    const fetchDogButton = document.getElementById("fetchDogButton");
    const dogImage = document.getElementById("dogImage");

    fetchDogButton.addEventListener("click", async () => {
        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");
            dogImage.src = response.data.message; // Set the image source to the fetched dog image URL
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    });
});

// sending headers api request using axios
async function fetchDataWithHeaders() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_ACCESS_TOKEN"
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching data with headers:", error);
    }
}
// js prtactice & learning completed as of now

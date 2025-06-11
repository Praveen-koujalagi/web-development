let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function() {
//     console.log("Button clicked!");
// }

function sayHello() {
    alert("Hello");
}

function sayName() {
    alert("My name is Praveen.");
}

// btn.onclick = sayHello;

// btn.onmouseenter = function() {
//     console.log("Mouse entered the button!");
// };


// btn.addEventListener("click", sayHello);
// btn.addEventListener("click", sayName);
btn.addEventListener("dblclick", function() {
    console.log("Button double-clicked!");
});
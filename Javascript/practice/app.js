let inp = document.querySelector("input");

inp.addEventListener("keydown", (event) => {
    console.log(event);
    console.log("key =", event.key);
    console.log("code =", event.code);
    console.log(`Key pressed: ${event.key}`);
});
//     document.addEventListener("keyup", (event) => {
//         console.log(`Key released: ${event.key}`);


let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted!");
    let inp = document.querySelector("input");
    console.log("Input value:", inp.value);
});


let btn = document.querySelector('button');
let input = document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    let li = document.createElement('li');
    li.textContent = input.value;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = ''; // Clear the input field after adding the item

    deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
    });
    li.addEventListener('click', function() {
        li.classList.toggle('done');
    });
});
// Add event listener to the input field to handle 'Enter' key press
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});
// Add a class to style completed tasks
let style = document.createElement('style');
style.textContent = `
    .done {
        text-decoration: line-through;
        color: gray;
    }
`;
document.head.appendChild(style);
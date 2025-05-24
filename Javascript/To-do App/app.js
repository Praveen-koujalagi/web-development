let todo = [];

while (true) {
    let req = prompt("Enter your choice:\n1. Add a task\n2. List tasks\n3. Delete a task\n4. Quit");

    if (req === "quit" || req === "4") {
        console.log("Exiting the application.");
        break;
    } else if (req === "1" || req.toLowerCase() === "add") {
        let task = prompt("Enter the task:");
        todo.push(task);
        console.log(`Task added: ${task}`);
    } else if (req === "2" || req.toLowerCase() === "list") {
        console.log("To-Do List:");
        if (todo.length === 0) {
            console.log("No tasks available.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i + 1}. ${todo[i]}`);
            }
        }
    } else if (req === "3" || req.toLowerCase() === "delete") {
        let taskNumber = prompt("Enter the task number to delete:");
        let index = parseInt(taskNumber) - 1;

        if (!isNaN(index) && index >= 0 && index < todo.length) {
            let removed = todo.splice(index, 1);
            console.log(`Task deleted: ${removed[0]}`);
        } else {
            console.log("Invalid task number.");
        }
    } else {
        console.log("Invalid choice. Please try again.");
    }
}

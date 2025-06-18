console.log(process.argv);

// process.argv is an array that contains the command-line arguments passed when the Node.js process was launched.
// The first element is the path to the Node.js executable, the second element is the path to the script being executed,
// and the remaining elements are any additional command-line arguments.

// Example usage: node script.js arg1 arg2
// In this case, process.argv will be:
// [
//   '/path/to/node',
//   '/path/to/script.js',
//   'arg1',
//   'arg2'
// ]    
// You can access the arguments like this:
const args = process.argv.slice(2); // This will give you an array of the arguments passed to the script, excluding the first two elements.
console.log('Arguments:', args);    
// You can also use destructuring to get specific arguments
const [arg1, arg2] = args;
console.log('First argument:', arg1);
console.log('Second argument:', arg2);  

// export in files
// explain modeule.exports
// module.exports is an object that is used to export functions, objects, or values from a module in Node.js.
// When you assign a value to module.exports, that value is made available to other files that require this module.

const math = require("./math");
console.log('Sum:', math.sum(5, 10)); // Example usage of the sum function
console.log('Multiply:', math.multiply(5, 10)); // Example usage of the multiply function
console.log('Gravity:', math.g); // Example usage of the constant g
console.log('Pi:', math.pi); // Example usage of the constant pi

// To run this script, you can use the command:
// node script.js arg1 arg2

// explain the require function
// The require function is used to import modules in Node.js. It allows you to include other JavaScript files or built-in modules into your current file.
// When you call require with a file path, Node.js looks for that file and executes it, making its exports available to the current file.
// For example, in the code above, we use require("./math") to import the math module defined in the math.js file.
// The require function returns the value of module.exports from the specified file, which in this case is an object containing the exported functions and constants.


// requiring directories
// When you require a directory in Node.js, it looks for an index.js file in that   directory by default.
// If you have a directory structure like this: 
// myModule/
// ├── index.js 
// └── otherFile.js
// You can require the directory like this:
// const myModule = require('./myModule');
// Node.js will automatically look for the index.js file in the myModule directory and execute it
// If you want to require a specific file in the directory, you can do so by specifying the file name:
// const otherFile = require('./myModule/otherFile');
// This will import the otherFile.js file directly without looking for an index.js file.
// In the case of requiring directories, Node.js will look for an index.js file in the specified directory.
// If it finds one, it will execute that file and return its exports.

const info = require("./Fruits");
console.log('Fruits:', info.fruits); // This will log the array of fruit objects imported from the index.js file in the Fruits directory.       
// The info object contains the fruits array, which includes the apple, banana, and orange objects with their respective properties.
// You can access the properties of each fruit like this:
info.fruits.forEach(fruit => {
  console.log(`Fruit: ${fruit.color}, Taste: ${fruit.taste}, Family: ${fruit.family}`);
});

// npm in Node.js
// npm (Node Package Manager) is a package manager for Node.js that allows you to install, share, and manage packages (libraries or modules) in your Node.js projects.
// It is the default package manager for Node.js and is included when you install Node.js.
// npm provides a command-line interface (CLI) that allows you to perform various tasks related to package management, such as installing packages, updating packages, and managing dependencies.
// npm init and npm install are two commonly used commands in npm.

// npm init
// The npm init command is used to create a new Node.js project and generate a package.json file.
// The package.json file contains metadata about the project, such as its name, version, description
// dependencies, scripts, and other configuration options.
// When you run npm init, it will prompt you to enter various details about your project, such as its name, version, and description.
// You can also use npm init -y to skip the prompts and create a default package.json file with the default values.
// The package.json file is essential for managing dependencies and scripts in a Node.js project.
// npm install
// The npm install command is used to install packages from the npm registry.
// When you run npm install <package-name>, it will download the specified package and its dependencies
// and add them to the node_modules directory in your project.
// If you want to install a package and save it as a dependency in your package.json file,
// you can use the --save flag like this: npm install <package-name> --save 
// This will add the package to the dependencies section of your package.json file.
// If you want to install a package as a development dependency, you can use the --save-dev flag like this:
// npm install <package-name> --save-dev
// This will add the package to the devDependencies section of your package.json file.
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");
// This imports the apple, banana, and orange modules, which export objects with properties related to each fruit.


let fruits = [apple, banana, orange];
// This creates an array called fruits that contains the imported fruit objects.

module.exports = {
  fruits    // This exports the fruits array, making it available to other files that require this module.
};
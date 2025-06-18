const sum = (a, b) => {
  return a + b;
}

const multiply = (a, b) => {
  return a * b;
}
const g = 9.8;
const pi = 3.14;


// export in files
// explain modeule.exports
// module.exports is an object that is used to export functions, objects, or values from a module in Node.js.
// When you assign a value to module.exports, that value is made available to other files that require this module.
// For example, if you want to export the sum and multiply functions, you can do it like this:
// module.exports = {
//   sum,   // This exports the sum function    
//   multiply, // This exports the multiply function
//   g, // This exports the constant g
//   pi // This exports the constant pi
// };

module.exports = {
  sum,
  multiply,
  g,
  pi
};
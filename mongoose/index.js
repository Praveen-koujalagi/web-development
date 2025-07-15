// INFORMATION ABOUT MONGOOSE
// MONGOOSE IS A NODE.JS LIBRARY FOR INTERACTING WITH MONGODB
// It provides a schema-based solution to model your application data

const mongoose = require('mongoose');

main().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test'); // Connect to the MongoDB database at the specified URI

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled    
}


// schema is a blueprint for the structure of documents in a collection
// mongoose.Schema is used to define the schema for a collection
// Define a schema and model for a collection named 'users'
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age : Number,
});
const User = mongoose.model('User', userSchema);


// Create a new user instance and save it to the database
// This will create a new document in the 'users' collection
// const user2 = new User({
//   name: 'adam',
//   email: 'adam@example.com',
//   age: 30
// });

// user2.save().then(() => {
//   console.log('User saved successfully');
// }).catch(err => {
//   console.error('Error saving user:', err);
// });


// Insert multiple users into the 'users' collection
// This will create multiple documents in the 'users' collection
User.insertMany([
  { name: 'John', email: 'john@example.com', age: 30 },
  { name: 'Jane', email: 'jane@example.com', age: 25 },
  { name: 'Alice', email: 'alice@example.com', age: 28 },
  { name: 'Bob', email: 'bob@example.com', age: 22 }
]).then(() => {
  console.log('Users saved successfully');
}).catch(err => {
  console.error('Error saving users:', err);
});

// Mongoose uses operation buffering, so you can perform operations without waiting for the connection to be established
// However, it's a good practice to ensure the connection is established before performing operations


// Fetch all users from the 'users' collection
// This will retrieve all documents from the 'users' collection
// You can also use User.findOne() to find a single user by a specific condition
// you can also add conditions to the find method, e.g., User.find({ age: { $gt: 25 } }) to find users older than 25
// we can also use findById to find a user by their ID
// User.find({}).then(users => {
//   console.log('All users:', users);
// }).catch(err => {
//   console.error('Error fetching users:', err);
// });

// update in mongoose is done using the update method
// we can also use updateOne or updateMany to update specific documents
// and we can also use findOneAndUpdate to find a user and update them in one operation. set { new: true } to return the updated document
// and we can also use findByIdAndUpdate to find a user by their ID and update them
User.updateOne({ name: 'John' }, { age: 31 }).then(() => {
  console.log('User updated successfully');
}).catch(err => {
  console.error('Error updating user:', err);
});

// Delete a user from the 'users' collection
// This will remove the document from the 'users' collection
// You can also use User.deleteOne() to delete a single user by a specific condition
// and User.findByIdAndDelete() to find a user by their ID and delete them
User.deleteOne({ name: 'John' }).then(() => {
  console.log('User deleted successfully');
}).catch(err => {
  console.error('Error deleting user:', err);
});
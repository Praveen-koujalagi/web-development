// MONGO RELATIONSHIPS explain
// In MongoDB, relationships between data can be represented in several ways, including embedded documents and references.
// This code demonstrates a one-to-few relationship using embedded documents.

// one to few relationship
// This code defines a Mongoose schema for a User model with a one-to-few relationship
// to an array of addresses. Each address has a location and a city.

const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => 
            console.log('Database connection established'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/relationDemo');` if your database has auth enabled    
    console.log('Connected to MongoDB');
}

const userSchema = new Schema({
  name: { 
    type: String,
    required: true
  },
  addresses: [{
    location: {
      type: String,
      required: true
    },
    city : {
      type: String,
      required: true
    }
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;

const adduser = async () => {
  const user = new User({
    name: 'John Doe',
    addresses: [
      { location: '123 Main St', city: 'New York' },
      { location: '456 Elm St', city: 'Los Angeles' }
    ]
  });

  await user.save();
  console.log('User added:', user);
}

adduser()
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err));
// This code connects to a MongoDB database, defines a User model with a one-to-few relationship
// to addresses, and adds a user with multiple addresses to the database.
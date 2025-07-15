const mongoose = require('mongoose');

main().then(() => {
  console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); // Connect to the MongoDB database at the specified URI

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled    
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true }, // schema validation are used to enforce the structure of documents
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true }
});

// enumeration is used to define a set of valid values for a field
// bookSchema.path('genre').enum(['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy']);

// schema validation with update
bookSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: Date.now() });
  next();
});

const Book = mongoose.model('Book', bookSchema);
Book.find().then(books => {
  console.log('Books:', books);
}).catch(err => {
  console.error('Error fetching books:', err);
});

const book1 = new Book({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  genre: 'Fiction'
});
book1.save().then(() => {
  console.log('Book saved successfully');
}).catch(err => {
  console.error('Error saving book:', err);
});


// hiding errors in Mongoose
// Mongoose uses operation buffering, so you can perform operations without waiting for the connection to be established
// However, it's a good practice to ensure the connection is established before performing operations
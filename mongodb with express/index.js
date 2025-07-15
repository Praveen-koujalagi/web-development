const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Middleware for JSON parsing
app.use(express.json());

// Correct way to set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MongoDB connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
}
main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

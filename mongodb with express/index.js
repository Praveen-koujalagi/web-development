const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat'); // Your Mongoose model

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static(path.join(__dirname, 'public'))); // Serve CSS, JS, etc.

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MongoDB connection
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
main()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// 🧼 REMOVE THIS — This causes duplicate chat insertions on every restart
// let chat1 = new Chat({
//   from: 'Alice',
//   to: 'Bob',
//   message: 'Hello Bob!',
//   createdAt: new Date()
// });
// chat1.save().then(() => console.log('Chat saved successfully')).catch(err => console.log(err));

// Show all chats
app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find();
    res.render('index', { chats }); // EJS view: views/index.ejs
  } catch (err) {
    console.error('Error fetching chats:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Render form
app.get('/chats/new', (req, res) => {
  res.render('new'); // EJS view: views/new.ejs
});

// Save form submission
app.post('/chats', async (req, res) => {
  const { from, to, message } = req.body;
  const newChat = new Chat({ from, to, message, createdAt: new Date() });

  try {
    await newChat.save();
    res.redirect('/chats');
  } catch (err) {
    console.error('Error saving chat:', err);
    res.status(500).send('Internal Server Error');
  }
});

//edit route
app.get('/chats/:id/edit', async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await Chat.findById(id);
    if (!chat) {
      return res.status(404).send('Chat not found');
    }
    res.render('edit', { chat });
  } catch (err) {
    console.error('Error fetching chat for edit:', err);
    res.status(500).send('Internal Server Error');
  }
});

// update route
app.post('/chats/:id', async (req, res) => {
  const { id } = req.params;
  const { from, to, message } = req.body;

  try {
    const chat = await Chat.findByIdAndUpdate(id, { from, to, message, createdAt: new Date() }, { new: true });
    if (!chat) {
      return res.status(404).send('Chat not found');
    }
    res.redirect('/chats');
  } catch (err) {
    console.error('Error updating chat:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Delete route
app.post('/chats/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const chat = await Chat.findByIdAndDelete(id);
    if (!chat) {
      return res.status(404).send('Chat not found');
    }
    res.redirect('/chats');
  } catch (err) {
    console.error('Error deleting chat:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Root route
app.get('/', (req, res) => {
  res.redirect('/chats');
});

// Server start
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

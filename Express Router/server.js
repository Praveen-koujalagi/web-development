// Express Router
// express router is a way to create modular, mountable route handlers in Express applications. it allows you to define routes in separate files and then use them in your main application file.
// This helps in organizing the code better and makes it easier to manage larger applications.

const express = require('express');
const app = express();
const router = express.Router();
const userRouter = require('./user');
const postRouter = require('./posts');

app.use('/users', userRouter);
app.use('/posts', postRouter);

// Define routes using the router
router.get('/', (req, res) => {
  res.send('Hello from the router!');
});

// example of express router with a parameter
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Use the router in the main application
app.use('/api', router);

module.exports = app;
// This code sets up an Express application with modular routing for user and post management, allowing for
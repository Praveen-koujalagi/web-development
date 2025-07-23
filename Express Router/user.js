// Express Router for User Management
// This file defines routes related to user management using Express Router.    
// It allows for modular route handling, making it easier to manage user-related endpoints.


const express = require('express');
const router = express.Router();

app.use(express.json());    

app.use('/api/users', router);

// Define user routes
router.get('/', (req, res) => {
  res.send('User list');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

module.exports = router;
// Use the user router in the main application
const app = express();
app.use('/api/users', router);
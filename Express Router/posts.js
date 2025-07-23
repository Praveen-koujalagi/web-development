//  express router for post management
// This file defines routes related to post management using Express Router. 
// It allows for modular route handling, making it easier to manage post-related endpoints.

 

const express = require('express');
const router = express.Router();


app.use('/api/posts', router);
// Define post routes
router.get('/', (req, res) => {
  res.send('Post list');
});

router.get('/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`Post ID: ${postId}`);
});

module.exports = router;

// Use the post router in the main application
const app = express();
app.use('/api/posts', router);
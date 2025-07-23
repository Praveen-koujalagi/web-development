// Express session is a middleware for managing user sessions in Express applications.
// This code sets up a basic Express server with session management.

const session = require('express-session');
const express = require('express');

const app = express();

app.use(session({
  secret: 'my secret key', // Replace with a strong secret key
  cookie: { maxAge: 60000 }, // Session expires after 1 minute
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using https
}));
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`Number of views: ${req.session.views}`);
  } else {
    req.session.views = 1;
    res.send('Welcome! This is your first visit.');
  }
});


// storing & using session information
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Could not log out.');
    }
    res.send('Logged out successfully.');
  });
});
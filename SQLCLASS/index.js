// index.js
const express = require('express');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// DB Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '889599PK',
});

// Random user generator (if needed)
let getRandomUser = () => {
  return [
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home route
app.get('/', (req, res) => {
  const q = 'SELECT COUNT(*) AS count FROM user';
  connection.query(q, (err, results) => {
    if (err) return res.status(500).send('DB Error');
    res.render('home.ejs', { userCount: results[0].count });
  });
});

// Show users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) return res.status(500).send('Error fetching users');
    res.render('showusers.ejs', { users: results });
  });
});

// Edit user
app.get('/user/:id/edit', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM user WHERE id = ?', [id], (err, results) => {
    if (err || results.length === 0) return res.status(500).send('User not found');
    res.render('edit.ejs', { user: results[0] });
  });
});

// Update user
app.patch('/user/:id', (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;
  connection.query('SELECT password FROM user WHERE id = ?', [id], async (err, results) => {
    if (err || results.length === 0) return res.status(500).send('User not found');
    const storedHash = results[0].password;
    const match = await bcrypt.compare(password, storedHash);
    if (!match) return res.status(403).send('Incorrect password');
    connection.query('UPDATE user SET username = ?, email = ? WHERE id = ?', [username, email, id], (err) => {
      if (err) return res.status(500).send('Update failed');
      res.redirect('/users');
    });
  });
});

// Create new user (GET)
app.get('/user/new', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) return res.status(500).send('Error fetching users');
    res.render('new.ejs', { users: results });
  });
});

// Create new user (POST)
app.post('/user', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).send('All fields required');
  const hash = await bcrypt.hash(password, 10);
  connection.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, hash], (err) => {
    if (err) return res.status(500).send('Insert failed');
    res.redirect('/users');
  });
});

// Delete user
app.delete('/user/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM user WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send('Delete failed');
    res.redirect('/users');
  });
});

// Start server
app.listen(8080, () => {
  console.log('Running at http://localhost:8080');
});

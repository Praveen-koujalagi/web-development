// connect-flash
// Connect flash is a middleware for storing and displaying flash messages in Express applications.
// connect-flash is typically used with express-session to manage session data.

const flash = require('connect-flash');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'my secret key', // Replace with a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 } // Session expires after 1 minute
}));

app.use(flash());
app.get('/flash', (req, res) => {
  req.flash('info', 'Flash message set!');
  res.redirect('/show-flash');
});

// res.locals in falsh are used to pass flash messages to the view. explicitly set res.locals.flash
app.use((req, res, next) => {
  res.locals.flash = req.flash();
  next();
});
app.get('/show-flash', (req, res) => {
  const messages = req.flash('info');
  res.send(messages.length > 0 ? messages : 'No flash messages');
});
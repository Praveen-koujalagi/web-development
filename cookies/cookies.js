// cookies are the only way to store data in the browser
// that is sent to the server with every request.   
// This is useful for things like authentication tokens.
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// example usage:
// setCookie('token', 'abc123', 7);
export function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

Date.prototype.toUTCString = function() {
  return this.toISOString().replace('T', ' ').replace('Z', '');
};

// exaple of cookies 

app.get('/cookies', (req, res) => {
    res.cookie('testCookie', 'testValue', { maxAge: 900000, httpOnly: true });
    res.send('Cookie has been set!');
  res.send(`
    <h1>Cookies</h1>
    <p>Set a cookie:</p>
    <form method="POST" action="/set-cookie">
      <input type="text" name="name" placeholder="Cookie Name" required>
      <input type="text" name="value" placeholder="Cookie Value" required>
      <input type="number" name="days" placeholder="Days to Expire" required>
      <button type="submit">Set Cookie</button>
    </form>
  `);
});


//cookie parser is a middleware that parses cookies attached to the client request object
// it populates req.cookies with an object keyed by the cookie names

// cookie parser example
app.post('/set-cookie', (req, res) => {
  const { name, value, days } = req.body;
  setCookie(name, value, days);
  res.send(`Cookie ${name} has been set with value ${value} for ${days} days.`);
});


// signed cookies are a way to ensure that the cookie has not been tampered with.
// they are created with a secret key that is used to sign the cookie value.
// when the cookie is sent back to the server, the server can verify the signature.

app.post('/set-signed-cookie', (req, res) => {
  const { name, value, days } = req.body;
  res.cookie(name, value, { maxAge: days * 864e5, httpOnly: true, signed: true });
  res.send(`Signed cookie ${name} has been set with value ${value} for ${days} days.`);
});

// to read cookies, you can use req.cookies
app.get('/get-cookies', (req, res) => {
  const cookies = req.cookies;
  res.send(`Cookies: ${JSON.stringify(cookies)}`);
});

// to read signed cookies, you can use req.signedCookies
app.get('/get-signed-cookies', (req, res) => {
  const signedCookies = req.signedCookies;
  res.send(`Signed Cookies: ${JSON.stringify(signedCookies)}`);
});

// verify the signature of a signed cookie
app.get('/verify-signed-cookie', (req, res) => {
  const cookieName = 'testCookie';
  const signedCookie = req.signedCookies[cookieName];
  
  if (signedCookie) {
    res.send(`The signed cookie ${cookieName} is valid with value: ${signedCookie}`);
  } else {
    res.send(`The signed cookie ${cookieName} is not valid or does not exist.`);
  }
});

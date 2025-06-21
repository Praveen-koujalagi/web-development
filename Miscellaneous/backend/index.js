const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    let {username, password} = req.query;
    res.send(`standerd get request,welcome ${username} `);
    });

app.post('/login', (req, res) => {
    let {username, password} = req.body;
    console.log(req.body);
    res.send(`standerd post request,welcome ${username} `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
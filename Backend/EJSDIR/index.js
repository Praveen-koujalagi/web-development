const express = require('express');
const app = express();
const path = require('path');

const port = 8080;


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get(`/hello`, (req, res) => {
    res.send('Hello, World!');
});

app.get(`/rolldice`, (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs',{dicevalue});
});

app.get(`/ig/:username`, (req, res) => {
    let {username} = req.params;
    const instaData= require(`./data.json`);
    const data = instaData[username];
    if(data) {
        res.render('instagram.ejs',{data});
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
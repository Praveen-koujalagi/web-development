const express = require('express');
const app = express();
const { url } = require('inspector');
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [

    { id : uuidv4(),
      username: "Praveenkoujalagi" ,
      content : "I love coding and I love to learn new things.",
    },
    { id : uuidv4(),
      username: "sarveshbalagi" ,
      content : "I am the goat of coding.",
    },
    { id : uuidv4(),
      username: "SankalpRotti" ,
      content : "I am an Investor and I love to invest in startups.",
    },
    { id : uuidv4(),
      username: "nobady" ,
      content : "i am a nobody, but I love to code.",
    }
];

app.get('/posts', (req, res) => {
  res.render('index.ejs', { posts: posts });
});

app.get('/posts/new', (req, res) => {
  res.render('new.ejs');    
});

app.post('/posts', (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
  let {id} = req.params;
  let post = posts.find(p => p.id === id);
  res.render('show.ejs', { post });
});

app.patch('/posts/:id', (req, res) => {
  let { id } = req.params;  
  let newContent = req.body.content;
  let post = posts.find(p => p.id === id);
  post.content = newContent;
  res.redirect(`/posts/`);
});

app.get('/posts/:id/edit', (req, res) => {
  let { id } = req.params;
  let post = posts.find(p => p.id === id);
  res.render('edit.ejs', { post });
});

app.delete('/posts/:id', (req, res) => {
  let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
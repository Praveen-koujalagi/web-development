// MONGO RELATIONSHIPS explain
// In MongoDB, relationships between data can be represented in several ways, including embedded documents and
// references.
// ONE TO SQUILLION RELATIONSHIP. MEANS ONE DOCUMENT CAN BE RELATED TO MANY OTHER DOCUMENTS.
// This code demonstrates a one-to-squillion relationship using references.


const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
    .then(() => 
            console.log('Database connection established'))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/relationDemo');` if your database has auth enabled    
    console.log('Connected to MongoDB');
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
module.exports = { User, Post };


const addUserWithPosts = async () => {
    const user = new User({
        name: 'Alice Smith',
        email: 'alice@example.com'
    });

    const post1 = new Post({
        title: 'First Post',
        content: 'This is the content of the first post.',
        author: user._id,
        likes: 0
    });

    const post2 = new Post({
        title: 'Second Post',
        content: 'This is the content of the second post.',
        author: user._id,
        likes: 0
    });

    user.posts.push(post1._id, post2._id);

    await user.save();
    await post1.save();
    await post2.save();

    console.log('User with posts added:', user);
};

addUserWithPosts()
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err));


// This code connects to a MongoDB database, defines User and Post models with a one-to-squillion relationship,
// and adds a user with multiple posts to the database. The User model has an array of references to Post documents,
// and each Post document has a reference to the User who authored it. This allows for efficient querying of posts by user and vice versa.
// The `addUserWithPosts` function creates a user and two posts, linking them together.


// MOONGOOSE MIDDLEWARE
// Mongoose middleware allows you to define functions that run at specific stages of the document lifecycle.
// There are several types of middleware in Mongoose, including:
// 1. Pre middleware: Runs before a specific action (e.g., save, validate).
// 2. Post middleware: Runs after a specific action.
// 3. Document middleware: Runs on individual documents.
// 4. Model middleware: Runs on the model level.
// Example of pre-save middleware to hash a password before saving a user document
userSchema.pre('save', async function(next) {
    const user = this;
    // Hash the password
    user.password = await hashPassword(user.password);
    next();
});
// Example of pre-find middleware to log the query being executed
userSchema.pre('find', function() {
    console.log('Query being executed:', this.getQuery());
});
// Example of post-save middleware to log a message after a user document is saved
userSchema.post('save', function(doc) {
    console.log('User document saved:', doc);
}); 
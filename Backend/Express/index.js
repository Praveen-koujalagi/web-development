const express = require('express');
const app = express();

console.dir(app);

const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


// path parameters
app.get('/:username', (req, res) => {
    console.log('request received for user:', req.params.username);
    res.send(`you contacted the root path for user: ${req.params.username}`);
    console.log(req.params);
});

// query strings
app.get('/search', (req, res) => {  
    let {q} = req.query;
    res.send(`you searched for: ${q}`);
});


app.use((req,res) => {
    console.log('request received for user:', req.params.username);
    //console.log(req);
    res.send('this is the basic response from the server');
});

// Create an instance of an Express application
// Log the app instance to the console
// Set the port number to 3000  
// Start the server and listen on the specified port
// Log a message to the console when the server starts
// Use a middleware function to handle incoming requests
// Log a message when a request is received 
// Log the request object to the console (commented out)
// Send a basic response back to the client
// Add a comment to explain the purpose of the code
// This code sets up a basic Express server that listens on port 3000 and responds to incoming requests with a simple message. It also logs the request details to the console for debugging purposes.
// The server can be extended with additional routes and middleware as needed.


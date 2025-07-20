// Middleware for handling requests in an Express application
// explain about middleware and how it can be used to process requests and responses
// Middleware functions in Express are functions that have access to the request object (req),  // the response object (res), and the next middleware function in the application’s request-response cycle.
// They can perform operations such as logging, authentication, parsing request bodies, and more.   
// Middleware can be used to modify the request or response objects, end the request-response cycle, or call the next middleware function in the stack.
// Middleware can be applied globally or to specific routes.
const express = require('express');
const app = express();
app.use(express.json());
const ExpressError = require('./ExpressError'); // Importing custom error class



// Enhanced Logger Middleware
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get('User-Agent') || 'Unknown';
  const ip = req.ip || req.connection.remoteAddress;
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent}`);
  
  // Log request body for POST/PUT requests
  if (method === 'POST' || method === 'PUT') {
    console.log('Request Body:', JSON.stringify(req.body, null, 2));
  }
  
  // Capture response time
  const startTime = Date.now();
  
  // Override res.end to log response details
  const originalEnd = res.end;
  res.end = function(...args) {
    const responseTime = Date.now() - startTime;
    console.log(`[${timestamp}] Response: ${res.statusCode} - ${responseTime}ms`);
    originalEnd.apply(this, args);
  };
  
  next();
};

// Use the logger middleware
app.use(logger);

// Request Counter Middleware
let requestCount = 0;
const requestCounter = (req, res, next) => {
  requestCount++;
  console.log(`🔢 Request #${requestCount}`);
  next();
};

app.use(requestCounter);


// Authentication Middleware
app.use(`/api`, (req, res, next) => {
   let {token } = req.query;
   if (token === "giveaccess") {
         next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).send('Access denied');
    }
});

// custom error handling middleware // This middleware catches errors thrown in the application
// and formats the response in a consistent way.
app.use((err, req, res, next) => {
  console.error(`❌ [${new Date().toISOString()}] ERROR on ${req.method} ${req.url}:`);
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    timestamp: new Date().toISOString()
  });
});

app.get('/api', (req, res) => {
    res.send('API Endpoint');
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/random', (req, res) => {
    const data = req.body;
    // Process the data
    res.send('this is a random post request');
});

// Test route for error handling
app.get('/error', (req, res, next) => {
    const error = new Error('This is a test error!');
    next(error); // Pass error to error handling middleware
});

// custom admin error handling middleware
app.get('/admin', (req, res, next) => {
    const error = new ExpressError('Admin access required', 403);
    next(error);
});

// handling async errors in routes example
// This route simulates an asynchronous operation that throws an error.
app.get('/async-error', async (req, res, next) => {
    throw new Error('This is an async error!');
});

// try catch in async error handling
app.get('/try-catch-error', async (req, res, next) => {
    try {
        throw new Error('This is a try-catch error!');
    } catch (error) {
        next(error);
    }
});

// Error handling middleware (should be last)
const errorLogger = (err, req, res, next) => {
  const timestamp = new Date().toISOString();
  console.error(`❌ [${timestamp}] ERROR on ${req.method} ${req.url}:`);
  console.error(err.stack);
  
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    timestamp: timestamp
  });
};

app.use(errorLogger);

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
    console.log('📊 Logger middleware is active');
});

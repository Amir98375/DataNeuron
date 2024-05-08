const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require('./src/config/db');
const signupController = require('./src/controller/signup.controller');

const app = express();

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json({ limit: '15mb' }));

// Use cors middleware to handle CORS errors
app.use(cors());

// Use your signupController for the "/addDetails" route
app.use("/addDetails", signupController);

// Error handling middleware for handling large request bodies
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 413 && 'body' in err) {
        res.status(413).send('Request entity too large');
    } else {
        next();
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    connect();
    console.log(`Server is running on port ${PORT}`);
});

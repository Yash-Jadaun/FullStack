const express = require('express');
const app = express();
const port = 8000;

// Custom Middleware
const myMiddleware = (req, res, next) => {
    console.log('Middleware चला!');
    next(); // अगली process पर जाने दो
};

// Use the middleware globally
app.use(myMiddleware);

// Route to test the middleware
app.get('/test', (req, res) => {
    res.send('Middleware Test Successful');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
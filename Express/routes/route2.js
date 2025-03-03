const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET request handler for /data
app.get('/data', (req, res) => {
    res.send('GET request received at /data');
});

// POST request handler for /data
app.post('/post', (req, res) => {
    res.send('POST request received at /data');
});

// PUT request handler for /update
app.put('/update', (req, res) => {
    res.send('PUT request received at /update');
});

// DELETE request handler for /delete
app.delete('/delete', (req, res) => {
    res.send('DELETE request received at /delete');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
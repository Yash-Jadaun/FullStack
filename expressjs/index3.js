const express = require('express');
const app = express();
const userRoutes = require('./userRoutes'); // Import the userRoutes file

app.use(express.json()); // Middleware to parse JSON

// Use the router at the "/api" path
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

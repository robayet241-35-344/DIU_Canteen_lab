// server.js
// This is the starting point of our backend. It sets up Express,
// applies middleware, and connects our routes.

const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());            // allows our React app (different port) to call this API
app.use(express.json());    // lets us read JSON data sent in the request body

// Routes
// Any request starting with /api/orders will go to orderRoutes.js
app.use('/api/orders', orderRoutes);

// A simple test route just to check the server is alive
app.get('/', (req, res) => {
    res.send('Campus Canteen API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

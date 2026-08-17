const express = require('express');
const cors = require('cors');
const db = require('./db'); // promise pool use krbe

const app = express();
app.use(cors());
app.use(express.json());

// Get all orders
app.get('/api/orders', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM orders');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create new order
app.post('/api/orders', async (req, res) => {
    const { name, items, total } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO orders (name, items, total) VALUES (?, ?, ?)',
            [name, items, total]
        );
        res.json({ message: 'Order placed successfully', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

// orderController.js
// This file holds the actual logic for handling order requests.
// Keeping this separate from server.js just keeps things easier to read.

const db = require('../db');

// Handler for GET /api/orders
// Fetches all orders from the database, newest first.
const getAllOrders = async (req, res) => {
    try {
        // SELECT * FROM orders, sorted so the newest order shows on top
        const [rows] = await db.query(
            'SELECT * FROM orders ORDER BY order_date DESC'
        );
        res.json(rows);
    } catch (error) {
        console.log('Error while fetching orders:', error);
        res.status(500).json({ message: 'Something went wrong while fetching orders' });
    }
};

// Handler for POST /api/orders
// Inserts a new order into the database using values sent from the frontend.
const createOrder = async (req, res) => {
    try {
        // Get the data sent from the React form
        const { customer_name, item_name, quantity, total_price } = req.body;

        // Very basic validation - just checking nothing is empty
        if (!customer_name || !item_name || !quantity) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Using "?" placeholders (parameterized query) instead of joining
        // strings together, so this is safe from SQL injection.
        const [result] = await db.query(
            'INSERT INTO orders (customer_name, item_name, quantity, total_price) VALUES (?, ?, ?, ?)',
            [customer_name, item_name, quantity, total_price]
        );

        res.status(201).json({
            message: 'Order placed successfully',
            orderId: result.insertId
        });
    } catch (error) {
        console.log('Error while creating order:', error);
        res.status(500).json({ message: 'Something went wrong while placing order' });
    }
};

module.exports = { getAllOrders, createOrder };

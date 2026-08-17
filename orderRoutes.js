// orderRoutes.js
// This file just connects URLs (routes) to the controller functions.

const express = require('express');
const router = express.Router();
const { getAllOrders, createOrder } = require('../controllers/orderController');

// GET /api/orders -> get all orders
router.get('/', getAllOrders);

// POST /api/orders -> place a new order
router.post('/', createOrder);

module.exports = router;

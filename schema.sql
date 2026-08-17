-- schema.sql
-- Run this file in MySQL to create the database and table for the project.
-- You can run it like: mysql -u root -p < schema.sql

-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS canteen_db;

-- Step 2: Use the database
USE canteen_db;

-- Step 3: Create the orders table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- (Optional) Insert a sample row just to check the table works
-- INSERT INTO orders (customer_name, item_name, quantity, total_price)
-- VALUES ('Test Student', 'Chicken Singara', 2, 40.00);

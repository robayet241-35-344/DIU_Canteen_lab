// OrderForm.jsx
// A simple controlled form. Each input's value comes from useState,
// and every change updates that state (that's what "controlled" means).

import { useState } from 'react';
import { foodItems } from './ItemList';

function OrderForm({ onOrderPlaced }) {
    // One state variable for each form field
    const [customerName, setCustomerName] = useState('');
    const [itemName, setItemName] = useState(foodItems[0].name);
    const [quantity, setQuantity] = useState(1);

    // Runs when the form is submitted
    const handleSubmit = async (e) => {
        e.preventDefault(); // stop the page from refreshing

        // Find the price of the selected item so we can calculate total price
        const selectedItem = foodItems.find((item) => item.name === itemName);
        const totalPrice = selectedItem.price * quantity;

        // The data we will send to the backend
        const newOrder = {
            customer_name: customerName,
            item_name: itemName,
            quantity: quantity,
            total_price: totalPrice
        };

        try {
            const response = await fetch('https://YOUR-NGROK-URL.ngrok-free.app/api/orders', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    body: JSON.stringify(newOrder)
});

            if (response.ok) {
                alert('Order placed successfully!');
                // Reset the form fields after placing the order
                setCustomerName('');
                setItemName(foodItems[0].name);
                setQuantity(1);

                // Tell the parent (App.jsx) to refresh the order list
                onOrderPlaced();
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            console.log('Error placing order:', error);
            alert('Could not connect to server.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>

                <div style={styles.formGroup}>
                    <label>Student Name / ID: </label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name or ID"
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label>Select Food Item: </label>
                    <select
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        style={styles.input}
                    >
                        {foodItems.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name} (৳{item.price})
                            </option>
                        ))}
                    </select>
                </div>

                <div style={styles.formGroup}>
                    <label>Quantity: </label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Place Order
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        margin: '20px 0',
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px'
    },
    formGroup: {
        marginBottom: '12px'
    },
    input: {
        marginLeft: '10px',
        padding: '5px',
        width: '200px'
    },
    button: {
        backgroundColor: '#27ae60',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer'
    }
};

export default OrderForm;

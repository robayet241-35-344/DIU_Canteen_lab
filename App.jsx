// App.jsx
// This is the main component. It fetches the orders from the backend
// and passes data down to the smaller components (Navbar, ItemList, OrderForm, OrderList).

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import './App.css';

function App() {
    // This state holds the list of orders coming from MySQL (via Express)
    const [orders, setOrders] = useState([]);

    // Function to fetch orders from the backend
    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/orders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.log('Error fetching orders:', error);
        }
    };

    // useEffect runs once when the component first loads (empty dependency array [])
    // This is how we get the initial list of orders when the page opens.
    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="App">
            <Navbar />

            <div style={{ maxWidth: '700px', margin: '0 auto', padding: '10px' }}>
                <ItemList />

                {/* When a new order is placed, OrderForm calls fetchOrders again
                    so the "Recent Orders" table updates automatically */}
                <OrderForm onOrderPlaced={fetchOrders} />

                <OrderList orders={orders} />
            </div>
        </div>
    );
}

export default App;

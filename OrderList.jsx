// OrderList.jsx
// This component shows the "Recent Orders" table.
// It gets the order data as a prop from App.jsx (App.jsx does the fetching).

function OrderList({ orders }) {
    return (
        <div style={styles.container}>
            <h2>Recent Orders</h2>

            {/* If there are no orders yet, show a simple message */}
            {orders.length === 0 ? (
                <p>No orders placed yet.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Item</th>
                            <th style={styles.th}>Qty</th>
                            <th style={styles.th}>Total Price</th>
                            <th style={styles.th}>Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* .map() to loop through orders, each row needs a unique key */}
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td style={styles.td}>{order.customer_name}</td>
                                <td style={styles.td}>{order.item_name}</td>
                                <td style={styles.td}>{order.quantity}</td>
                                <td style={styles.td}>৳{order.total_price}</td>
                                <td style={styles.td}>
                                    {new Date(order.order_date).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
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
    table: {
        width: '100%',
        borderCollapse: 'collapse'
    },
    th: {
        borderBottom: '2px solid #333',
        textAlign: 'left',
        padding: '8px'
    },
    td: {
        borderBottom: '1px solid #eee',
        padding: '8px'
    }
};

export default OrderList;

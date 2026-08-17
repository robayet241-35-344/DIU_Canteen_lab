// ItemList.jsx
// This component just shows the menu items available in the canteen.
// The list is hardcoded here since the menu doesn't change often.
// This same array is also used inside OrderForm.jsx for the dropdown.

export const foodItems = [
    { id: 1, name: 'Chicken Singara', price: 20 },
    { id: 2, name: 'Beef Roll', price: 35 },
    { id: 3, name: 'Vegetable Sandwich', price: 30 },
    { id: 4, name: 'Cold Coffee', price: 50 },
    { id: 5, name: 'Chicken Biryani', price: 90 }
];

function ItemList() {
    return (
        <div style={styles.container}>
            <h2>Available Food Items</h2>
            <ul style={styles.list}>
                {/* Using .map() to render each item, each needs a unique key */}
                {foodItems.map((item) => (
                    <li key={item.id} style={styles.listItem}>
                        {item.name} - ৳{item.price}
                    </li>
                ))}
            </ul>
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
    list: {
        listStyleType: 'none',
        padding: 0
    },
    listItem: {
        padding: '8px 0',
        borderBottom: '1px solid #eee'
    }
};

export default ItemList;

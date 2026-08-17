// Navbar.jsx
// Just a simple header showing the title of the app.

function Navbar() {
    return (
        <div style={styles.navbar}>
            <h1 style={styles.title}>🍔 Daffodil Campus Canteen</h1>
        </div>
    );
}

// Keeping styles in a plain object, simple inline styling
const styles = {
    navbar: {
        backgroundColor: '#2c3e50',
        padding: '15px',
        textAlign: 'center'
    },
    title: {
        color: 'white',
        margin: 0
    }
};

export default Navbar;

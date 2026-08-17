# Campus Canteen Order System

A simple full-stack app: React (frontend) + Node.js/Express (backend) + MySQL (database).

## Folder structure
```
canteen-app/
  backend/
    controllers/orderController.js
    routes/orderRoutes.js
    db.js
    server.js
    schema.sql
    package.json
  frontend/
    src/
      components/Navbar.jsx
      components/ItemList.jsx
      components/OrderForm.jsx
      components/OrderList.jsx
      App.jsx
      App.css
      main.jsx
```

## How to run

### 1. Set up the database
Open MySQL and run the schema file:
```
mysql -u root -p < backend/schema.sql
```
This creates the `canteen_db` database and the `orders` table.

### 2. Run the backend
```
cd backend
npm install
node server.js
```
The backend will run on **http://localhost:5000**

Before running, open `db.js` and set your own MySQL `user` and `password`.

### 3. Run the frontend
This project was written using plain React component files (.jsx). To run them,
create a React app with Vite and drop these files in:
```
npm create vite@latest frontend -- --template react
cd frontend
npm install
```
Then replace the generated `src/App.jsx`, `src/main.jsx`, `src/App.css` and
`src/components/` folder with the files from this project. After that:
```
npm run dev
```
The frontend will run on **http://localhost:5173**

## API Endpoints
| Method | Endpoint         | Description             |
|--------|------------------|--------------------------|
| GET    | /api/orders      | Get all orders           |
| POST   | /api/orders      | Place a new order         |

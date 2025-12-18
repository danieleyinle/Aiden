require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Middleware
app.use(cors()); 
app.use(express.json()); 
// Routes
app.use('/api/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('Aiden API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
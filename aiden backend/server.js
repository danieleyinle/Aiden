require('dotenv').config(); 

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Middleware - This is CRUCIAL for Screenshot (212) to work
app.use(express.json());

// Routes - This links Screenshot (209/213) to your server
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Aiden API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
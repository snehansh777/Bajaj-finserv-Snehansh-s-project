// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const healthRoutes = require('./routes/healthRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes structuring
app.use('/bfhl', healthRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

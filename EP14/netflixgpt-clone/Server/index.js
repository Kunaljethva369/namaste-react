const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Connection');
const authRoutes = require('./router');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the authentication routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

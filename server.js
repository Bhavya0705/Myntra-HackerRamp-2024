import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import TopRentedItem from './models/TopRentedItem.js';
import NewestItem from './models/NewestItem.js';

dotenv.config();
const mongoURI = 'mongodb://localhost:27017/rentalsDB';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.get('/api/top-rented-items', async (req, res) => {
    try {
        const topRentedItems = await TopRentedItem.find();
        res.json(topRentedItems);
    } catch (error) {
        console.error('Error fetching top rented items', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/api/newest-items', async (req, res) => {
    try {
        const newestItems = await NewestItem.find();
        res.json(newestItems);
    } catch (error) {
        console.error('Error fetching newest items', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

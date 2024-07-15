import mongoose from 'mongoose';
import connectDB from './config/db';
import TopRentedItem from './models/topRentedItem';
import NewestItem from './models/NewestItem';

const seedData = async () => {
    await connectDB();

    const newestItems = [
        { name: 'New Arrival 1', rentAmount: 'Rs. 700/day', image: 'https://m.media-amazon.com/images/I/61rOLXOQ6QL._SY741_.jpg' },
        { name: 'New Arrival 2', rentAmount: 'Rs. 500/day', image: 'https://m.media-amazon.com/images/I/61rOLXOQ6QL._SY741_.jpg' },
        { name: 'New Arrival 3', rentAmount: 'Rs. 490/day', image: 'https://m.media-amazon.com/images/I/710O-ZIULbL._SY879_.jpg' },
        { name: 'New Arrival 4', rentAmount: 'Rs. 360/day', image: 'https://m.media-amazon.com/images/I/61n0StsR-4L._SY741_.jpg ' },
        { name: 'New Arrival 5', rentAmount: 'Rs. 300/day', image: 'https://m.media-amazon.com/images/I/61gFT+Fdv-L._SY741_.jpg' }
    ];

    const topRentedItems = [
        { name: 'Item 1', dailyRent: 300, image: 'https://m.media-amazon.com/images/I/71LMGs6dccL._SY879_.jpg' },
        { name: 'Item 2', dailyRent: 520, image: 'https://m.media-amazon.com/images/I/51Clvs6gtYL._SY741_.jpg' },
        { name: 'Item 3', dailyRent: 700, image: 'https://m.media-amazon.com/images/I/71NR4MwqkjL._SY879_.jpg' },
        { name: 'Item 4', dailyRent: 500, image: 'https://m.media-amazon.com/images/I/71DXDGkLD9L._SY879_.jpg' },
        { name: 'Item 5', dailyRent: 490, image: 'https://m.media-amazon.com/images/I/61rOLXOQ6QL._SY879_.jpg' }
    ];

    await NewestItem.insertMany(newestItems);
    await TopRentedItem.insertMany(topRentedItems);

    console.log('Data seeded');
    process.exit();
};

seedData();

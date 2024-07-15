import { Router } from 'express';
const router = Router();
import TopRentedItem, { find } from '../models/topRentedItem';

// Get all top rented items
router.get('/', async (req, res) => {
    try {
        const items = await find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new top rented item
router.post('/', async (req, res) => {
    const item = new TopRentedItem({
        name: req.body.name,
        rent: req.body.rent,
        image: req.body.image
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;

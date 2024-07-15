import { Router } from 'express';
const router = Router();
import NewestItem, { find } from '../models/newestItem';

// Get all newest items
router.get('/', async (req, res) => {
    try {
        const items = await find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new newest item
router.post('/', async (req, res) => {
    const item = new NewestItem({
        name: req.body.name,
        rentAmount: req.body.rentAmount,
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

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const topRentedItemSchema = new Schema({
    name: String,
    dailyRent: String,
    image: String, // Correct the field name here
});

const TopRentedItem = mongoose.model('TopRentedItem', topRentedItemSchema);
topRentedItemSchema.index({ rentCount: -1 });

export default TopRentedItem;

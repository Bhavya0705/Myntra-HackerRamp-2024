import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newestItemSchema = new Schema({
    name: String,
    rentAmount: String,
    image: String, // Correct the field name here
});

const NewestItem = mongoose.model('NewestItem', newestItemSchema);
newestItemSchema.index({ rentCount: -1 });

export default NewestItem;

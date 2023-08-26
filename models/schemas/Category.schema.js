import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema(
    {
        id: { type: ObjectId, require: true },
        name: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('categories', categorySchema);

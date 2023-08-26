import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'category',
    new Schema(
        {
            _id: {type: ObjectId},
            categoryId: { type: Number },
            name: { type: String, required: true },
        },
        {
            id: false,
            timestamps: true,
        },
    ),
);

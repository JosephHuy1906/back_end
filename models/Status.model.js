import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'status',
    new Schema({
        statusId: { type: ObjectId },
        name: { type: String, required: true },
    },
    {
        id: false,
        timestamps: true,
    }),
);

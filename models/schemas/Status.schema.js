import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const statusSchema = new Schema(
    {
        statusId: { type: ObjectId },
        name: { type: String, required: true },
    },
    {
        id: false,
        timestamps: true,
    },
);

export default mongoose.model('status', statusSchema);

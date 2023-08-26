import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const oderSchema = new Schema(
    {
        oderId: { type: ObjectId },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        price: { type: Number, required: true },
        userId: { type: String, required: true, ref: 'users' },
        statusId: { type: String, ref: 'status' },
    },
    {
        id: false,
        timestamps: true,
    },
);

export default mongoose.model('oders', oderSchema);

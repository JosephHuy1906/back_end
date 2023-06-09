import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'oder',
    new Schema({
        oderId: { type: ObjectId },
        address: { type: String, required: true },
        phone: {type: String, required: true},
        price: {type: Number, required: true},
        userId: {type: String, required: true, ref: 'users'},
        statusId: {type: String, ref: 'status'}
    },
    {
        id: false,
        timestamps: true,
    }),
);

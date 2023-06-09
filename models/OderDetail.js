import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'oderdetail',
    new Schema({
        productId: { type: String, required: true, ref: 'product' },
        quatity: { type: Number, required: true },
        price: {type: Number, required: true},
        oderId: {type: String, required: true, ref: 'oder'},
        id: {type: ObjectId}
    },
    {
        id: false,
        timestamps: true,
    }),
);

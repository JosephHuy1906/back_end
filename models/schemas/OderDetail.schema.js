import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const oderDetailSchema = new Schema(
    {
        productId: { type: String, required: true, ref: 'product' },
        quatity: { type: Number, required: true },
        price: { type: Number, required: true },
        oderId: { type: String, required: true, ref: 'oders' },
        id: { type: ObjectId },
    },
    {
        id: false,
        timestamps: true,
    },
);

export default mongoose.model('oderDetails', oderDetailSchema);

import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'comment',
    new Schema({
        commentId: { type: ObjectId },
        content: {type: String},
        productId: {type: String, required: true, ref: 'product'},
        userId: {type: String, required: true, ref: 'users'}
    },
    {
        id: false,
        timestamps: true,
    }),
);

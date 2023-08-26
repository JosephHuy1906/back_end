import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
    {
        commentId: { type: ObjectId },
        content: { type: String },
        productId: { type: String, required: true, ref: 'product' },
        userId: { type: String, required: true, ref: 'users' },
    },
    {
        id: false,
        timestamps: true,
    },
);

export default mongoose.model('comments', commentSchema);

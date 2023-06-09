import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export default mongoose.model(
    'product',
    new Schema({
        productId: { type: ObjectId },
        name: { type: String, required: true },
        price: { type: String, required: true },
        describe: { type: String, required: true },
        avatar: { type: String, required: true },
        hinh: [
            {
                imgId: {type: ObjectId},
                url: {type: String}
            },
        ],
        categoryId: {type: Number, required: true , ref: 'category'}
    },
    {
        id: false,
        timestamps: true,
    }
    ),
);

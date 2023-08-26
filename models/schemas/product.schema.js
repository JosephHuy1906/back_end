import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
    {
        productId: { type: ObjectId },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        describe: { type: String, required: true },
        avatar: { type: String, required: true },
        hinh: [
            {
                imgId: { type: ObjectId },
                url: { type: String },
            },
        ],
        categoryId: { type: Schema.Types.ObjectId, ref: "categories" },
    },
    {
        id: false,
        timestamps: true,
    },
);

export default mongoose.model('products', productSchema);

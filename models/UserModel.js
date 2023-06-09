import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

const User = mongoose.model(
    'users',
    new Schema({
        userId: { type: ObjectId },
        fullName: { type: String },
        email: { type: String, required: true },
        password: { type: String },
        phone: { type: String },
        avatar: { type: String },
        address: { type: String },
        roleId: { type: Number, default: 2 },
        code: { type: String },
    }, {
        id: false,
        timestamps: true,
    }),
);

export default User;

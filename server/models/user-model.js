import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    role: { type: String, default: 'user' },
});

export default model('User', UserSchema);

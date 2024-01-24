import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const PostModel = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    tags: { type: Array, default: [] },
    viewsCount: { type: Number, default: 0 },
    imageUrl: { type: String },
    comments: { type: Array, default: [] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default model('Post', PostModel);
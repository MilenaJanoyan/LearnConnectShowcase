import PostModel from "../models/post-model.js";
import mongoose from "mongoose";

class PostService {
    async create(req, res, next) {
        const { title, text, imageUrl, tags } = req.body;

        // Ensure that tags is either an array or a string that can be split
        const parsedTags = Array.isArray(tags) ? tags : (tags ? tags.split(',') : []);

        const doc = new PostModel({
            title,
            text,
            imageUrl,
            tags: parsedTags,
            user: req.user.id,
        });

        try {
            const post = await doc.save();
            res.json(post);
        } catch (error) {
            // Handle error appropriately
            next(error);
        }
    }

    async getAll(req, res, next) {
        const posts = await PostModel.find().populate({
            path: 'user',
            select: '-password -__v'
        }).exec();

        res.json(posts);
    }

    async getOne(req, res, next) {
        const postId = req.params.postId;

        PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: { viewsCount: 1 },
            },
            {
                returnDocument: 'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Failed to return article',
                    });
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Article not found',
                    });
                }

                res.json(doc);
            },
        ).populate('user');
    }

    async delete(req, res) {
        const postId = req.params.postId;

        PostModel.findOneAndDelete(
            {
                _id: postId,
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        message: 'Failed to delete article',
                    });
                }

                if (!doc) {
                    return res.status(404).json({
                        message: 'Article not found',
                    });
                }

                res.json({
                    success: true,
                });
            },
        );
    }

    async update(req, res) {
        const postId = req.params.id;

        const parsedTags = Array.isArray(req.body.tags)
            ? req.body.tags
            : req.body.tags
                ? req.body.tags.split(',')
                : [];

        return PostModel.updateOne(
            {
                _id: postId,
            },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                user: req.userId,
                tags: parsedTags,
            },
        );

    }

    async addComment(req, res) {
        const postId = req.params.id;
        const { userId, comment, userEmail } = req.body;

        try {
            const post = await PostModel.findOneAndUpdate(
                { _id: postId },
                {
                    $push: {
                        comments: {
                            id: mongoose.Types.ObjectId(),
                            userId,
                            comment,
                            userEmail
                        },
                    },
                },
                { new: true }
            );

            if (!post) {
                return res.status(404).json({
                    message: 'Article not found',
                });
            }

            res.json({
                success: true,
                post,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Failed to add comment',
            });
        }
    }
}

export default new PostService()
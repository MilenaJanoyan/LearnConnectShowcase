import postService from "../service/post-service.js";
import ApiError from "../exceptions/api-error.js";

class PostController {
    async create (req, res, next) {
        try {
            return postService.create(req, res, next)
        } catch (err) {
            next(err)
        }
    }

    async getAll (req, res, next) {
        try {
            return postService.getAll(req, res, next);
        } catch (err) {
            next(err)
        }
    }

    async getOne (req, res, next) {
        try {
            const onePost = await postService.getOne(req, res, next)
            return onePost
        } catch (err) {
            next(err)
        }
    }

    async delete (req, res, next) {
        try {
             await postService.delete(req, res)
        } catch (err) {
            next(err)
        }
    }

    async update (req, res, next){
        try {
            const updated = await postService.update(req, res)
            if (!updated) {
                next(ApiError.BadRequest('Failed to update article'))
            }
            return res.json({ success: true })
        } catch (err) {
            next(err)
        }
    }

    async addComment(req, res, next) {
        try {
            const addedComment = await postService.addComment(req, res)
            res.json({ addedComment })
        } catch (err) {
            next(err)
        }
    }
}

export default new PostController()
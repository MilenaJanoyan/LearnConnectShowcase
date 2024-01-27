import postService from "../service/post-service.js";
import ApiError from "../exceptions/api-error.js";

class PostController {
    // Creates an article
    async create (req, res, next) {
        try {
            return postService.create(req, res, next)
        } catch (err) {
            next(err)
        }
    }

    // Gets all the articles
    async getAll (req, res, next) {
        try {
            return postService.getAll(req, res, next);
        } catch (err) {
            next(err)
        }
    }

    // Gets a single article
    async getOne (req, res, next) {
        try {
            const onePost = await postService.getOne(req, res, next)
            return onePost
        } catch (err) {
            next(err)
        }
    }

    // Get 3 Popular Posts
    async getPopularPosts (req, res, next) {
        try {
            const popularPosts = await postService.getPopularPosts(req, res, next)
            return popularPosts
        } catch (err) {
            next(err)
        }
    }

    // Deletes an article
    async delete (req, res, next) {
        try {
             await postService.delete(req, res)
        } catch (err) {
            next(err)
        }
    }


    // Updates an article
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

    // Adds a comment to the artcle
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
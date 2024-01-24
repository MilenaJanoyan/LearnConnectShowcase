import {body} from "express-validator";

const articleValidation = [
    body('title', 'Enter title').isLength({min: 3}),
    body('text').isLength({min: 3}),
    body('tags', 'Array tags').optional().isArray(),
    body('comments', 'Array comments').optional().isArray(),
    body('imageUrl', 'Invalid image url').optional().isURL()
]
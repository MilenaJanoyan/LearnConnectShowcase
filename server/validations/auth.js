import { body } from "express-validator";

export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
]
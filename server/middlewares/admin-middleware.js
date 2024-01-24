import ApiError from '../exceptions/api-error.js';

export function superAdminMiddleware(req, res, next) {
    const user = req.user;

    if (user && user.role === 'superadmin') {
        next();
    } else {
        return next(ApiError.ForbiddenError('Permission denied.'));
    }
}

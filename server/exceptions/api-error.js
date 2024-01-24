export default class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User not found.');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors);
    }

    static ForbiddenError(message, errors = []) {
        return new ApiError(403, message, errors);
    }

    static UnhandledError(message, errors = []) {
        return new ApiError(500, message, errors);
    }
}

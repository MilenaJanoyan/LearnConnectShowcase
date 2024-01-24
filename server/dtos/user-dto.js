export default class UserDto {
    email;
    id;
    isActivated;
    role

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.role = model.role
    }
}

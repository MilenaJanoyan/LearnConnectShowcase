export interface IUser {
    email: string;
    password: string;
}

export interface IUserInfo {
    email: string;
    exp: number
    iat: number
    id: string
    isActivated: boolean
    role: string
}

export interface IUserResponse {
    email: string
    isActivated: string
    role: string
    _id: string
}
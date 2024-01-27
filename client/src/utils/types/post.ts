import {IUserResponse} from "./user.ts";

export interface IPostResponse {
    comments: ICommentType[]
    createdAt: string
    tags: any[]
    text: string
    title: string
    updatedAt: string
    user: IUserResponse | null
    imageUrl?: string
    viewsCount: number
    __v?: number;
    _id: string;
    isAdmin?: boolean;
    isAuth?: boolean
}

interface ICommentType {
    id: string;
    userId: string;
    comment: string;
    userEmail: string;
}

export interface ICommentData {
    id: string;
    userId: string;
    userEmail: string;
    comment: string;
}

export interface IComments {
    comment: string;
    id: string;
    userEmail: string;
    userId: string
}

export interface IPopularPosts {
    comments: IComments;
    createdAt: string;
    text: string;
    title?: string;
    updatedAt: string;
    user: IUserResponse | null;
    viewsCount: number;
    __v?: number;
    _id: string
    imageUrl?: string;
}
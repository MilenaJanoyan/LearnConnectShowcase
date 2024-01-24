import {$authHost, $host} from "../axiosConfig.ts";
import {ICommentData} from "../../utils/types/post.ts";

export const getAllPosts = async () => {
    try {
        const response = await $host.get('/post')

        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getOnePosts = async (id: string) => {
    try {
        const response = await $host.get(`/post/${id}`)

        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const deletePost = async (id: string) => {
    try {
        const response = await $authHost.delete(`/post/${id}`)

        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const addComment = async (data: Partial<ICommentData>) => {
    try {
        const response = await $authHost.put(`/addComment/${data.id}`, {
            userEmail: data.userEmail,
            userId: data.userId,
            comment: data.comment
        })

        return response.data
    } catch (err) {
        console.log(err)
    }
}
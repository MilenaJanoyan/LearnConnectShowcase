import {IUser} from "../../utils/types/user.ts";
import {$authHost, $host} from "../axiosConfig.ts";

export const login = async (userData: IUser) => {
    try {
        const response = await $host.post('/login', userData)
        if (response.data) {
            localStorage.setItem('MJ-accessToken', response.data.accessToken)
            return response.data
        }

        if (!response || response.status !== 200) {
            return response
        }

    } catch (err) {
        console.log(err)
    }
}

export const registration = async (userData: IUser ) => {
    try {
        const response = await $host.post('/registration', userData)
        if (response.data) {
            return response.data
        }
    } catch (err) {
        console.log(err)
    }
}

export const logout = async () => {
    try {
        const response = $host.post('/logout')
        localStorage.removeItem('MJ-accessToken')
        return response

    } catch (err) {
        console.log(err)
    }
}

export const getMe = async () => {
    try {
        const response = await $authHost.get('/me')
        return response.data
    } catch (err) {
        console.log(err)
    }
}
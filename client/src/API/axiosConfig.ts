import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('MJ-accessToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

$authHost.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<any>(`${process.env.REACT_APP_API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('MJ-accessToken', response.data.accessToken);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('Unauthorized')
        }
    }
    throw error;
})

export {
    $host,
    $authHost
}
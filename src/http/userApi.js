import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    console.log(email)
    console.log(password)
    const {data} = await $host.post('api/user/registration', { email, password, role: 'ADMIN'})

    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $host.post('api/auth/registration', )
    return jwt_decode(data.token)
}
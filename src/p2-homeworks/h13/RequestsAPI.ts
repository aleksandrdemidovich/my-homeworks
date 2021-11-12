import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})



export const requestAPI = {
    authTest(success: boolean) {
        return instance.post<RequestType>('/auth/test', {success})
    },
}

type RequestType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}
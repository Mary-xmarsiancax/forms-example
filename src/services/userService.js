import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY":
            "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
    }
})

export const login = (body) =>  instance.post(`/auth/login`, body);
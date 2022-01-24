import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true,
    headers: {
        "API-KEY":
            "cacb72d4-1b5a-4f57-a8f1-e95013a64714"
    }
})

// export const login = (body) =>  instance.post(`/auth/login`, body);
export const usersApi = {
    usersRegistration(data) {
        return instance.post(`/users`, data)
    },
    usersLogin(data) {
        return instance.post(`/users/login`, data)
    }
}
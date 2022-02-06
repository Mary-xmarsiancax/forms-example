import * as axios from "axios";

    const instance = axios.create({
        baseURL: "http://localhost:8000/api"
    })

localStorage.getItem("token")
export const setAuthorizationHeader = (token) => {
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
       tokenDelete()
    }
}
const tokenDelete = () => {
    localStorage.removeItem("token")
    delete instance.defaults.headers.common['Authorization'];
}

setAuthorizationHeader(localStorage.getItem("token"))

export const usersApi = {
    usersRegistration(data) {
        return instance.post(`/users`, data)
    },
    usersLogin(data) {
        return instance.post(`/users/login`, data)
    },
    getCurrentUser() {
        return instance.get(`/users/current`)
    }
}

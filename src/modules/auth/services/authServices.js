import { api } from "../../../shared/api/apiClient";


export const authServices = {
    login: (user, credentials) => api.post('/auth/log-in', user, credentials),
    register: (userData) => api.post('/auth/sign-up', userData),
}
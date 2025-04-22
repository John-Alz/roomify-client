import axios from "axios";



const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {
    get: async (endpoint) => {
        try {
            let response = await apiClient.get(endpoint);
            return response.data;
        } catch (error) {
            console.log(`Error en el get de las app: ${error}`);
            throw new Error;
        }
    },
    post: async (endpoint, data, credentials) => {
        try {
            let response = await apiClient.post(endpoint, data, credentials);
            return response;
        } catch (error) {
            console.log(`Error en el post de las app: ${error}`);
            throw new Error;
        }
    },

}
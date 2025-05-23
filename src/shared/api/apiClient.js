import axios from "axios";



const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const api = {
    post: async (endpoint, data, credentials) => {
        try {
            let response = await apiClient.post(endpoint, data, credentials);
            return response;
        } catch (error) {
            console.log(`Error en el post de las app: ${error}`);
            throw new Error;
        }
    }
}
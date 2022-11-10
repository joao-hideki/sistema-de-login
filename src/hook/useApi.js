import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.teste.com'
});

export const useApi = () => ({
    validateToken: async(token) => {
        return {
            user: {id:3, name: 'João', email: 'joao@teste.com'}
        };
        const response = api.post('/validate', {token});
        return response.data;
    },
    signIn: async(email, password) => {
        return {
            user: {id:3, name: 'João', email: 'joao@teste.com'},
            token: '123456789'
        };
        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    logout: async() => {
        return {status: true};
        const response = await api.post('/logout');
        return response.data;
    }
})
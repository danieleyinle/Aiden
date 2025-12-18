import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const fetchUsers = () => API.get('/users');
export const createUser = (userData) => API.post('/users', userData);

export default API;
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL de la API externa
});

export default API;
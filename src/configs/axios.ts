import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://665e1ae7e88051d604096a3a.mockapi.io/dussystem/v1'
});
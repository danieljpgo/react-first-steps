import axios  from 'axios';

const api = axios.create({ baseURL: 'https://wordsvector.herokuapp.com' });

export default api;
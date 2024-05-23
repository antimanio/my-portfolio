import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const login = async (email, password) => {
    return await axios.post(`${API_BASE_URL}/auth/signin`, { email, password });
};


export const register = async (name,email, password, role) => {
    return await axios.post(`${API_BASE_URL}/auth/register`, {name, email, password, role });
};


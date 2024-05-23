import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getUserOnly = async () => {
    try {
        return await axios.get(`${API_BASE_URL}/users/only`);
    } catch (error) {
        console.error('Error logging in:', error);
    }
};


export const getUserAdminAndUser = async ()=> {
    try {
        return await axios.get(`${API_BASE_URL}/admin-and-user/both`);
    } catch (error) {
        console.error('Error logging in:', error);
    }
};
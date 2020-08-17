import axios from 'axios';
import { API_URL } from '../constants';

const USERS_API = `${API_URL}/users`;

export const loggedIn = async () => {
    const token = localStorage.getItem('x-auth-token');
    if (!token) return false;
    const verified = await verifyToken(token);
    if (!verified) localStorage.removeItem('x-auth-token');
    return verified;
}

export const login = async (email, password) => {
    const response = await axios.post(`${USERS_API}/login`, {email, password});
    if (response.data.success) localStorage.setItem('x-auth-token', response.data.token);
    return response.data;
}

export const logout = async (token = null) => {
    if (!token) token = localStorage.getItem('x-auth-token');
    const config = { headers: { 'x-auth-token': token } };
    const response = await axios.get(`${USERS_API}/logout`, config);
    return response.data.success;
}

export const verifyToken = async token => {
    const config = { headers: { 'x-auth-token': token } };
    const response = await axios.get(`${USERS_API}/verifyToken`, config);
    return response.data.success;
}

export const getUser = async (token = null) => {
    if (!token) token = localStorage.getItem('x-auth-token');
    const config = { headers: { 'x-auth-token': token } };
    const response = await axios.get(`${USERS_API}`, config);
    return response.data.user;
}

export const register = async (user) => {
    const response = await axios.post(`${USERS_API}/register`, user);
    return response.data;
}

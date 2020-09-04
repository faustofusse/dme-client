import { SET_USER, REMOVE_TOKEN } from './actionTypes';
import { API_URL, METHOD_POST, METHOD_GET } from '../../constants';
import { call, uploadFile } from '../../utils';
import { setToken } from './token';

const authHeaders = (token) => ({ headers: { 'x-auth-token': token } });

export const setUser = (user) => ({ type: SET_USER, payload: user });

export const login = (email, password) => {
    const params = { email, password };
    return call(METHOD_POST, `${API_URL}/users/login`, params, null, SET_USER, (response, dispatch) => {
        localStorage.setItem('x-auth-token', response.token);
        dispatch(setToken(response.token));
    });
}

export const logout = (token) => {
    return call(METHOD_GET, `${API_URL}/users/logout`, null, authHeaders(token), REMOVE_TOKEN, (response, dispatch) => {
        localStorage.removeItem('x-auth-token');
    });
}

export const getUser = (token) => {
    return call(METHOD_GET, `${API_URL}/users`, null, authHeaders(token), SET_USER);
}

export const register = (user, callback = null) => {
    return call(METHOD_POST, `${API_URL}/users/register`, user, null, SET_USER, callback);
}

export const uploadImage = (fieldName, file, metadata, load, error, progress, abort, transfer, options, token) => {
    return uploadFile(`${API_URL}/images/user`, 'image', token, file, load, error, progress);
}
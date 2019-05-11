import Cookies from 'js-cookie';

const TokenKey = 'admin_token'

export const getToken = () => Cookies.get(TokenKey)

export const setToken = token => Cookies.set(TokenKey,token);

export const removeToken = token => Cookies.remove(TokenKey)

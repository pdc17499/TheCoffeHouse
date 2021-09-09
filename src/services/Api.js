import axios from 'axios';
import {baseURL} from './config';

const instance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getProductList = () => instance.get('api/v2/menu');
export const getStoreList = () => instance.get('api/get_all_store');
export const login = params => instance.post('api/verify_mobile', params);

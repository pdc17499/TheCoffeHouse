import axios from 'axios'
import { baseURL } from './config'


const instance = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
// export const getProductList = () => {
//   return instance.get('get-products')
// }

export const getProductList = () => instance.get('api/v2/menu');
export const getStoreList = () => instance.get('api/get_all_store')
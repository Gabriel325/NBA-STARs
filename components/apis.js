/*
*/
import axios from 'axios';

const api = axios.create({
  baseURL: 'GET https://www.balldontlie.io/api/v1/players'

});
export default api;
import axios from 'axios';
import build from './config';

const baseUrl = build == "prod" ? 'https://rookie-bot.herokuapp.com/' : "http://localhost:5000/";

const myAxios = axios.create({
    baseURL: baseUrl
});
// default export myAxios;
export default myAxios;

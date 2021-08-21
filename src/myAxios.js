import axios from 'axios';
const baseUrl = 'https://rookie-bot.herokuapp.com/';
// const baseUrl = 'http://localhost:5000';

const myAxios = axios.create({
    baseURL: baseUrl
});
// default export myAxios;
export default myAxios;

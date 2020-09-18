import axios from 'axios';

const weather_api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default weather_api;

import axios from 'axios';

const API_KEY= '2cb131314c2dd935a8a7fce26f2fb470';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //daca scimbam us putem pune alta tra pe care ne o dorim
 const url = `${ROOT_URL}&q=${city},us`;
 const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}

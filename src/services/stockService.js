import axios from 'axios';
import {API_KEY} from '../config.js'

const CORS = 'https://cors-anywhere.herokuapp.com/';

export const getData = function(symbol) {
  return axios.get(`${CORS}http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => {console.log(res.data["Realtime Global Securities Quote"]); return res.data["Realtime Global Securities Quote"]})
}

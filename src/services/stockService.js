import axios from 'axios';
import {API_KEY} from '../config.js'

const CORS = 'https://cors-anywhere.herokuapp.com/';

export const getData = function(symbol) {
  return axios.get(`${CORS}http://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => {return res.data["Realtime Global Securities Quote"]})
}

export const getPastYear = function(symbol) {
  return axios.get(`${CORS}http://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => {return res.data["Monthly Time Series"]})
}

export const getSimpleMovingAverage = function(symbol) {
  return axios.get(`${CORS}http://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=monthly&time_period=10&series_type=close&apikey=${API_KEY}`)
  .then(res => {return res.data["Technical Analysis: SMA"]})
}

export const getRealTimeAverage = function(symbol) {
  return axios.get(`${CORS}http://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=1min&time_period=10&series_type=close&apikey=${API_KEY}`)
  .then(res => {return res.data["Technical Analysis: SMA"]})
}

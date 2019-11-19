import axios from 'axios';
import { API_KEY } from '../config.js'

export const getData = function(symbol) {
  return axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => {return res.data["Global Quote"]})
}

export const getPastYear = function(symbol) {
  return axios.get(`http://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`)
  .then(res => {return res.data["Monthly Time Series"]})
}

export const getSimpleMovingAverage = function(symbol) {
  return axios.get(`http://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=monthly&time_period=10&series_type=close&apikey=${API_KEY}`)
  .then(res => {return res.data["Technical Analysis: SMA"]})
}

export const getRealTimeAverage = function(symbol) {
  return axios.get(`http://www.alphavantage.co/query?function=SMA&symbol=${symbol}&interval=1min&time_period=200&series_type=close&apikey=${API_KEY}`)
  .then(res => {return res.data["Technical Analysis: SMA"]})
}

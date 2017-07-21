import * as avgimport from '../services/stockService';

const GET_AVG = 'GET_AVG';
const GET_AVG_PENDING = 'GET_AVG_PENDING';
const GET_AVG_FULFILLED = 'GET_AVG_FULFILLED';

const initialState = {
  realTimeAverage: {},
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_AVG_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_AVG_FULFILLED:
      return Object.assign({}, state, {loading: false, realTimeAverage: action.payload})

    default:
      return state
  }
}

export function getRealTimeAverage(symbol) {
  return {
    type: GET_AVG,
    payload: avgimport.getRealTimeAverage(symbol)
  }
}

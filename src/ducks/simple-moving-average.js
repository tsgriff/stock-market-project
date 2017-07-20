import * as smaimport from '../services/stockService';

const GET_SMA = 'GET_SMA';
const GET_SMA_PENDING = 'GET_SMA_PENDING';
const GET_SMA_FULFILLED = 'GET_SMA_FULFILLED';

const initialState = {
  simpleMovingAverage: {},
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_SMA_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_SMA_FULFILLED:
      return Object.assign({}, state, {loading: false, simpleMovingAverage: action.payload})

    default:
      return state
  }
}

export function getSimpleMovingAverage(symbol) {
  return {
    type: GET_SMA,
    payload: smaimport.getSimpleMovingAverage(symbol)
  }
}

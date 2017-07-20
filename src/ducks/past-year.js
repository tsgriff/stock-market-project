import * as pastimport from '../services/stockService';

const GET_YEARLY = 'GET_YEARLY';
const GET_YEARLY_PENDING = 'GET_YEARLY_PENDING';
const GET_YEARLY_FULFILLED = 'GET_YEARLY_FULFILLED';

const initialState = {
  pastYear: [],
  chartData: {},
  loading: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_YEARLY_PENDING:
      return Object.assign({}, state, {loading: true})

    case GET_YEARLY_FULFILLED:
      return Object.assign({}, state, {loading: false, pastYear: action.payload, chartData: action.payload})

    default:
      return state
  }
}

export function getPastYear(symbol) {
  return {
    type: GET_YEARLY,
    payload: pastimport.getPastYear(symbol)
  }
}

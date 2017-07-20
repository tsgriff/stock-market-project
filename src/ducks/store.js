import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './data';
import yearReducer from './past-year';
import SMAReducer from './simple-moving-average';



const reducer = combineReducers({
  stockreducer: dataReducer,
  yearReducer: yearReducer,
  SMAReducer: SMAReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);

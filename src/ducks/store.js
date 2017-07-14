import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './data';
import yearReducer from './past-year';



const reducer = combineReducers({
  stockreducer: dataReducer,
  yearReducer: yearReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);

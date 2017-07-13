import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import dataReducer from './data';


const reducer = combineReducers({
  stockreducer: dataReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);

import react from 'react';
import {createStore, applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware=applyMiddleware(thunkMiddleware);
const enhancers=compose(middleware)

const store=createStore(rootReducer,undefined,enhancers)

export default store
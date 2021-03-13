import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import homeReducer from '../redux/reducers/homeReducer';
import countryReducer from '../redux/reducers/countryReducer';

const reducers = combineReducers({
  homeReducer,
  countryReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

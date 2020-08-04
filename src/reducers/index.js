import { combineReducers } from 'redux';

import apiReducer from './apiReducer';

const reducer = combineReducers({
  api: apiReducer,
});

export default reducer;
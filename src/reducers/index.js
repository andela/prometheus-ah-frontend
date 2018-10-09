import { combineReducers } from 'redux';
import dummy from './dummy';
import articles from './articles';

const rootReducer = combineReducers({
  dummy,
  articles,
});

export default rootReducer;

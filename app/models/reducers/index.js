import { combineReducers } from 'redux';
import articleList from './getArticles';

const rootReducer = combineReducers({
  articleList
});

export default rootReducer;

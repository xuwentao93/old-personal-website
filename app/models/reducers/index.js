import { combineReducers } from 'redux';
import { typeArticleList, currentArticleList } from './getArticles';

const rootReducer = combineReducers({
  typeArticleList,
  currentArticleList
});

export default rootReducer;

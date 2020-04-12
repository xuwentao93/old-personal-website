import { combineReducers } from 'redux';
import { typeArticleList, currentArticleList } from './getArticles';
import { selectSubtype } from './articleSubType';

const rootReducer = combineReducers({
  typeArticleList,
  currentArticleList,
  selectSubtype
});

export default rootReducer;

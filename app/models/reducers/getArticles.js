import { CURRENT, TYPE } from '../actions/getArticles';

const s = {
  data: []
};
export function typeArticleList(state = s, action) {
  switch (action.type) {
    case TYPE:
      console.log(action);
      return {
        ...state,
        data: action.data
      };
    default:
      return {
        ...state
      };
  }
}

export function currentArticleList(state = {
  data: null
}, action) {
  switch (action.type) {
    case CURRENT:
      return {
        ...state,
        data: action.data
      };
    default:
      return {
        ...state
      };
  }
}

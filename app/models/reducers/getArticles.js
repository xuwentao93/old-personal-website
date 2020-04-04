import { CURRENT, TYPE } from '../actions/getArticles';

const s = {
  data: []
};
export function typeArticleList(state = s, action) {
  switch (action.type) {
    case TYPE:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}

export function currentArticleList(state = s, action) {
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

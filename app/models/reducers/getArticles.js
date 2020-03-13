import { CURRENT, TYPE } from '../actions/getArticles';

export default function getArticleMsgApi(state, action) {
  switch (action.type) {
    case CURRENT:
      return {
        ...state,
        data: action.data
      };
    case TYPE:
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

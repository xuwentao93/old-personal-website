import { SELECT_TYPE } from '../actions/getArticleSubType';

const s = {
  subtypeList: []
};

export function selectSubtype(state = s, action) {
  switch (action.type) {
    case SELECT_TYPE:
      return {
        ...state,
        subtypeList: action.subtypeList
      };
    default:
      return state;
  }
}

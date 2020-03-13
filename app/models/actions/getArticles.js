import { getArticleMsg } from '@/api/article';

export const TYPE = 'type';
export const CURRENT = 'current';
export function getArticleMsgApi(params) {
  return (dispatch) => getArticleMsg(params)
    .then((res) => {
      console.log(res);
    })
    .then((data) => {
      if (params.current) dispatch(currentArticles(data));
      else dispatch(typeArticles(data));
    })
    .catch((err) => console.log('err comes from  api:' + err));
}

function currentArticles(data) {
  return {
    type: CURRENT,
    data
  };
}

function typeArticles(data) {
  return {
    type: TypeError,
    data
  };
}

import { getArticleMsg } from '@/api/article';

export const TYPE = 'type';
export const CURRENT = 'current';
export function getArticleMsgApi(params) { // 获取文章列表.
  return (dispatch) => getArticleMsg(params)
    .then((res) => {
      if (res.data.success === false) {
        console.error('something must be wrong in action getArticleMsgApi');
        return [];
      }
      return res.data.articleList;
    })
    .then((data) => {
      if (params.current) dispatch(currentArticles(data)); // 获取近期文章列表.
      else if (params.type) dispatch(typeArticles(data)); // 获取类型文章列表.
      else {
        console.error(`You get an error comes from getArticleMsgApi, we can't get the correct params,
        please check it`);
      }
      return data;
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
    type: TYPE,
    data
  };
}

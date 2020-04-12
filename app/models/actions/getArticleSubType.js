import { getArticleSubType } from '@/api/article';

export const SELECT_TYPE = 'selectType';

export function articleSubType(params) { // 获取文章子类型.
  return (dispatch) => getArticleSubType(params)
    .then((res) => {
      if (res.data.success === false) {
        console.error('something must be wrong in action getArticleMsgApi');
        return [];
      }
      return res.data.subtypeList;
    })
    .then((data) => {
      data = JSON.parse(data);
      if (params) dispatch(subType(data));
      else {
        console.error(`You get an error comes from getArticleMsgApi, we can't get the correct params,
        please check it`);
      }
      return data;
    })
    .catch((err) => console.log('err comes from  api:' + err));
}

function subType(subtypeList) {
  return {
    type: SELECT_TYPE,
    subtypeList
  };
}
